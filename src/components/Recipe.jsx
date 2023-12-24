import React, { useState, useEffect, useContext } from 'react';
import '../styles/Recipe.css';
import AddModal from './AddModal';
import FullRecipeModal from './FullRecipeModal';
import Cards from './Cards';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import EditModal from './EditModal';
import { RecipeContext } from '../context/Recipe';
import { LoginContext } from '../context/Login';

const DEMO_TOKEN = import.meta.env.VITE_DEMO_TOKEN;

function Recipe() {

  const { user, auth0 } = useAuth0();

  const {
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
  } = useContext(RecipeContext);

  const { isDemoAccount } = useContext(LoginContext);

  useEffect(() => {
    async function fetchData() {
      if (isDemoAccount) {
        const token = DEMO_TOKEN;
        const user = demoUser;
        setToken(token);
        setUser(user);
        fetchRecipes(user.email);
      } else {
        const res = await auth0.getIdTokenClaims();
        const token = res.__raw;
        setToken(token);
        setUser(res);
        fetchRecipes(res.email);
      }
    }

    fetchData();
  }, [isDemoAccount, auth0, fetchRecipes]);


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
        onHide={!handleShowModal}
        addRecipe={addRecipe}
        toggleLoading={toggleLoading}
      />
      <EditModal
        show={showEditModal}
        onHide={!handleShowEditModal}
        updateRecipe={updateRecipe}
        toggleLoading={toggleLoading}
      />
      <FullRecipeModal
        show={showFullRecipeModal}
        onHide={!handleShowFullRecipeModal}
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
                handleShowFullRecipeModal={handleShowFullRecipeModal}
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
