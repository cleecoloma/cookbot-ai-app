import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function RecipeProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFullRecipeModal, setShowFullRecipeModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowFullRecipeModal = (recipe) => {
    setShowFullRecipeModal(!showFullRecipeModal);
    setCurrentRecipe(recipe);
  };

  const handleCloseFullRecipeModal = () => {
    setShowFullRecipeModal(!showFullRecipeModal);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const fetchRecipes = async (email, token) => {
    setIsLoading(true);
    const queryParams = { user: email };
    try {
      const response = await authRequest('GET', token, null, null, queryParams);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addRecipe = async (email, ingredients, userToken) => {
    setIsLoading(true);
    let ingredientsObj = {
      user: email,
      foodItems: ingredients,
    };
    try {
      const response = await authRequest(
        'POST',
        userToken,
        null,
        ingredientsObj
      );
      setRecipes([...recipes, response.data]);
    } catch (error) {
      console.error('Error adding recipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteRecipe = async (id, userToken) => {
    setIsLoading(true);
    try {
      await authRequest('DELETE', userToken, id, null);
      const filteredRecipes = recipes.filter((recipe) => recipe._id !== id);
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const authRequest = async (method, token, id, data, queryParams) => {
    const baseURL = SERVER_URL;
    let url = id ? `/recipes/${id}` : '/recipes';
    if (queryParams) {
      url += '?' + new URLSearchParams(queryParams).toString();
    }

    const config = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      baseURL,
      url,
      data: data ? data : null,
    };
    return await axios(config);
  };

  return (
    <RecipeContext.Provider
      value={{
        showModal,
        showFullRecipeModal,
        showDeleteModal,
        isLoading,
        recipes,
        currentRecipe,
        handleShowModal,
        handleShowFullRecipeModal,
        handleCloseFullRecipeModal,
        handleShowDeleteModal,
        handleCloseDeleteModal,
        fetchRecipes,
        addRecipe,
        deleteRecipe,
        toggleLoading,
        authRequest,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
