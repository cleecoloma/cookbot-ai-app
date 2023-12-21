import React, { useState, useEffect } from 'react';
import '../styles/Recipe.css';
import Carousel from 'react-bootstrap/Carousel';
import AddModal from './AddModal';
import FullRecipeModal from './FullRecipeModal';
import Cards from './Cards';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import EditModal from './EditModal';

const DEMO_TOKEN = import.meta.env.VITE_DEMO_TOKEN;

function Recipe(props) {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFullRecipeModal, setShowFullRecipeModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [token, setToken] = useState(null);
  const [editRecipe, setEditRecipe] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (props.isDemoAccount) {
        const token = DEMO_TOKEN;
        const user = props.demoUser;
        setToken(token);
        setUser(user);
        fetchRecipes(user.email);
      } else {
        const res = await props.auth0.getIdTokenClaims();
        const token = res.__raw;
        setToken(token);
        setUser(res);
        fetchRecipes(res.email);
      }
    }

    fetchData();
  }, [props.isDemoAccount, props.demoUser, props.auth0]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowFullRecipeModal = (recipe) => {
    setShowFullRecipeModal(true);
    setCurrentRecipe(recipe);
  };

  const handleCloseFullRecipeModal = () => {
    setShowFullRecipeModal(false);
  };

  const fetchRecipes = async (email) => {
    const queryParams = { user: email };
    props
      .authRequest('GET', token, null, null, queryParams)
      .then((response) => {
        setRecipes(response.data);
      });
  };

  const addRecipe = async (input) => {
    let ingredientsObj = {
      user: user.email,
      foodItems: input,
    };
    props.authRequest('POST', token, null, ingredientsObj).then((response) => {
      setRecipes([...recipes, response.data]);
      toggleLoading();
    });
  };

  const updateRecipe = async (id, updatedData) => {
    props.authRequest('PUT', token, id, updatedData).then((response) => {
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
    props.authRequest('DELETE', token, id, null).then((response) => {
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

  const handleTimestampCheck = (timestamp) => {
    const timestampDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - timestampDate;
    const twoHoursInMilliS = 3600000; // One hour converted to milliseconds
    if (timeDifference > twoHoursInMilliS) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div id='recipe-container'>
      <Button
        className='addButton'
        style={{ width: '10rem', margin: '0 auto' }}
        variant='success'
        onClick={handleShowModal}
      >
        Add New Recipe
      </Button>
      <AddModal
        user={user}
        show={showModal}
        onHide={handleCloseModal}
        addRecipe={addRecipe}
        toggleLoading={toggleLoading}
      />
      <EditModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        editRecipe={editRecipe}
        updateRecipe={updateRecipe}
        toggleLoading={toggleLoading}
      />
      {isLoading ? (
        /* Loading screen/Div with className loader is from https://webdeasy.de/en/css-loading-animations/ - Author John Heiner */
        <div className='loader'>
          <div className='tall-stack'>
            <div className='butter falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='pancake falling-element'></div>
            <div className='plate'>
              <div className='plate-bottom'></div>
              <div className='shadow'></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='card-container'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      )}
    </div>
  );
}

const AuthRecipe = withAuth0(Recipe);

export default AuthRecipe;
