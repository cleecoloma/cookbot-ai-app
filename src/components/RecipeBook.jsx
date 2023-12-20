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
                src='https://placehold.co/300x200'
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
                    <li>Slice the ribeye steak into thin strips.</li>
                    <li>
                      In a bowl, whisk together the egg with a pinch of salt and
                      black peppe…
                    </li>
                    <li>
                      Heat some vegetable oil in a pan or wok over high heat.
                    </li>
                    <li>
                      Add the ribeye strips to the pan and cook until browned
                      and slightly c…
                    </li>
                    <li>
                      In the same pan, add a little more vegetable oil if needed
                      and sauté t…
                    </li>
                    <li>
                      Add the whisked egg to the pan and scramble until cooked
                      through.
                    </li>
                    <li>
                      Return the cooked ribeye strips to the pan and pour in a
                      splash of soy…
                    </li>
                    <li>
                      Toss everything together for a minute or two until the
                      flavors meld an…
                    </li>
                    <li>
                      Remove from heat and serve the Ribeye and Egg Stir Fry
                      hot.
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
