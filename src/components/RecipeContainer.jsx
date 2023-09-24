import React from 'react';
import { useAuthRequest } from '../auth/Authorization';
import Recipe from './Recipe';

// Here i'm going to use RecipeContainer to "piggyback" the authRequest function as a prop to the recipe.jsx

const RecipeContainer = () => {
  const authRequest = useAuthRequest();

  return <Recipe authRequest={authRequest} />;
};

export default RecipeContainer;
