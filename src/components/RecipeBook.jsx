'use strict';

import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import '../styles/RecipeBook.css';

function RecipeBook() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id='recipe-book'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              centered
            >
              <Tab label='Recipe One' value='1' />
              <Tab label='Recipe Two' value='2' />
              <Tab label='Recipe Three' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <div className='recipe-title'>
              <h3>Ribeye and Egg Stir Fry</h3>
              <div className='recipe-icons'>
                <div className='recipe-icons-divs'>
                  <HourglassBottomIcon />
                  <p>PREP: 5 min</p>
                </div>
                <div className='recipe-icons-divs'>
                  <AccessTimeIcon />
                  <p>COOK: 30 min</p>
                </div>
                <div className='recipe-icons-divs'>
                  <RestaurantIcon />
                  <p>SERVING: 2</p>
                </div>
              </div>
            </div>
            <div className='recipe-container'>
              <img
                className='recipe-image'
                src='../images/garlic-butter-ribeye-with-green-onions.png'
              />
              <div className='recipe-text'>
                <div className='ingredients'>
                  <p>INGREDIENTS</p>
                  <ul>
                    <li>Ribeye steak</li>
                    <li>Egg</li>
                    <li>Salt</li>
                    <li>Black pepper</li>
                    <li>Vegetable oil</li>
                    <li>Garlic</li>
                    <li>Green onion</li>
                  </ul>
                </div>
                <div className='directions'>
                  <p>DIRECTIONS</p>
                  <ol>
                    <li>Preheat the oven to 400°F (200°C).</li>
                    <li>
                      Season the ribeye steak generously with salt and black
                      pepper on both sides.
                    </li>
                    <li>
                      Heat vegetable oil in an oven-safe skillet over high heat.
                    </li>
                    <li>
                      Sear the ribeye steak for 2 minutes on each side to
                      develop a crust.
                    </li>
                    <li>
                      Transfer the skillet to the preheated oven and cook the
                      steak for an additional 5-7 minutes for medium-rare.
                    </li>
                    <li>
                      While the steak is cooking, in a separate skillet, heat
                      vegetable oil over medium heat.
                    </li>
                    <li>
                      Add minced garlic and chopped green onion to the skillet
                      and sauté until fragrant and lightly golden.
                    </li>
                    <li>
                      In a small mixing bowl, whisk an egg with a pinch of salt
                      and black pepper.
                    </li>
                    <li>
                      Push the garlic and green onion mixture to one side of the
                      skillet and pour the whisked egg into the other side.
                    </li>
                    <li>
                      Gently scramble the egg until cooked through, then mix it
                      with the garlic and green onion.
                    </li>
                    <li>
                      Remove the steak from the oven and let it rest for a few
                      minutes.
                    </li>
                    <li>
                      Serve the garlic butter ribeye topped with the scrambled
                      egg, garlic, and green onion mixture.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            Item Two <img src='https://placehold.co/600x400' />
          </TabPanel>
          <TabPanel value='3'>
            Item Three <img src='https://placehold.co/600x400' />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default RecipeBook;
