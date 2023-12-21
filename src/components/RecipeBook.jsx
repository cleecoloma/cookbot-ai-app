import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import recipes from '../data/recipes.json';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import '../styles/RecipeBook.css';

function RecipeBook() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    setRecipeData(recipes);
  }, []);

  return (
    <div id='recipe-book'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='recipe tabs' centered>
              {recipes.map((recipe) => (
                <Tab key={recipe.id} label={recipe.title} value={recipe.id} />
              ))}
            </TabList>
          </Box>
          {recipes.map((recipe) => (
            <TabPanel key={recipe.id} value={recipe.id}>
              <div className='recipe-title'>
                <h3>{recipe.title}</h3>
                <div className='recipe-icons'>
                  <div className='recipe-icons-divs'>
                    <HourglassBottomIcon />
                    <p>PREP: {recipe.prepTime}</p>
                  </div>
                  <div className='recipe-icons-divs'>
                    <AccessTimeIcon />
                    <p>COOK: {recipe.cookTime}</p>
                  </div>
                  <div className='recipe-icons-divs'>
                    <RestaurantIcon />
                    <p>SERVING: {recipe.servings}</p>
                  </div>
                </div>
              </div>
              <div className='recipe-container'>
                <div className='recipe-image-div'>
                  <img
                    className='recipe-image'
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <p className='recipe-image-see-more'>SEE MORE</p>
                </div>

                <div className='recipe-text'>
                  <div className='ingredients'>
                    <p>INGREDIENTS</p>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='directions'>
                    <p>DIRECTIONS</p>
                    <ol>
                      {recipe.directions.map((direction, index) => (
                        <li key={index}>{direction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
}

export default RecipeBook;
