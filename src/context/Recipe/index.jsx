import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function RecipeProvider(props) {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFullRecipeModal, setShowFullRecipeModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [token, setToken] = useState(null);
  const [editRecipe, setEditRecipe] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const handleShowFullRecipeModal = (recipe) => {
    setShowFullRecipeModal(!showFullRecipeModal);
    {showFullRecipeModal && setCurrentRecipe(recipe)}
  };

  const fetchRecipes = async (email) => {
    const queryParams = { user: email };
    authRequest('GET', token, null, null, queryParams)
      .then((response) => {
        setRecipes(response.data);
      });
  };

  const addRecipe = async (input) => {
    let ingredientsObj = {
      user: user.email,
      foodItems: input,
    };
    authRequest('POST', token, null, ingredientsObj).then((response) => {
      setRecipes([...recipes, response.data]);
      toggleLoading();
    });
  };

  const updateRecipe = async (id, updatedData) => {
    authRequest('PUT', token, id, updatedData).then((response) => {
      const updatedRecipes = recipes.map((recipe) => {
        if (recipe.id === id) {
          return response.data;
        }
        return recipe;
      });
      setRecipes(updatedRecipes);
      toggleLoading();
      fetchRecipes();
    });
  };

  const deleteRecipe = async (id) => {
    authRequest('DELETE', token, id, null).then((response) => {
      const filteredRecipes = recipes.filter((recipe) => recipe._id !== id);
      setRecipes(filteredRecipes);
    });
  };
  
  const handleUpdateRecipe = (recipe) => {
    setEditRecipe(recipe);
    setShowFullRecipeModal(false);
    setShowEditModal(true);
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
        showEditModal,
        showFullRecipeModal,
        isLoading,
        recipes,
        currentRecipe,
        handleShowModal,
        handleShowEditModal,
        handleShowFullRecipeModal,
        fetchRecipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        handleUpdateRecipe,
        toggleLoading,
        authRequest,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
