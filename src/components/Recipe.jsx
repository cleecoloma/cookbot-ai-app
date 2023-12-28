'use strict';

import React, { useEffect, useContext } from 'react';
import AddModal from './AddModal';
import FullRecipeModal from './FullRecipeModal';
import Cards from './Cards';
import { Button } from 'react-bootstrap';
import { RecipeContext } from '../context/Recipe';
import { LoginContext } from '../context/Login';
import '../styles/Recipe.css';

function Recipe() {
  const { loggedUser } = useContext(LoginContext);

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

  const sortedRecipes = [...recipes].sort((a, b) => {
    const timestampA = new Date(a.timestamp).getTime();
    const timestampB = new Date(b.timestamp).getTime();
    return timestampB - timestampA;
  });

  return (
    <div id='recipe-container'>
      <Button id='addButton' onClick={handleShowModal}>
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
          {sortedRecipes.length ? (
            sortedRecipes.map((recipe, idx) => (
              <Cards key={idx} recipe={recipe} />
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
