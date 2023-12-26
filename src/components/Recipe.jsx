import React, { useState, useEffect, useContext } from 'react';
import '../styles/Recipe.css';
import AddModal from './AddModal';
import FullRecipeModal from './FullRecipeModal';
import Cards from './Cards';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { RecipeContext } from '../context/Recipe';
import { LoginContext } from '../context/Login';

function Recipe() {
  const { auth0 } = useAuth0();
  const { loggedUser, isDemoAccount } = useContext(LoginContext);

  const {
    showModal,
    showFullRecipeModal,
    isLoading,
    recipes,
    currentRecipe,
    handleShowModal,
    fetchRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    handleUpdateRecipe,
    toggleLoading,
  } = useContext(RecipeContext);

  useEffect(() => {
    async function fetchData() {
      if (loggedUser && loggedUser.email) {
        fetchRecipes(loggedUser.email, loggedUser.token);
      }
    }

    fetchData();
  }, [loggedUser]);

  return (
    <div id='recipe-container'>
      <Button
        id='addButton'
        onClick={handleShowModal}
      >
        Add New Recipe
      </Button>
      <AddModal
        user={loggedUser}
        show={showModal}
        addRecipe={addRecipe}
        toggleLoading={toggleLoading}
      />
      <FullRecipeModal
        show={showFullRecipeModal}
        currentRecipe={currentRecipe}
        updateRecipe={updateRecipe}
        handleUpdateRecipe={handleUpdateRecipe}
        deleteRecipe={deleteRecipe}
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
          {recipes.length ? (
            recipes.map((recipe, idx) => (
              <Cards
                key={idx}
                recipe={recipe}
              />
            ))
          ) : (
            <p>No recipes yet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Recipe;
