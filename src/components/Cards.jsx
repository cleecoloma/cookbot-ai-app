'use strict';

import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import { RecipeContext } from '../context/Recipe';
import '../styles/Cards.css';

function Cards(props) {
  const { handleShowFullRecipeModal } = useContext(RecipeContext);

  const handleTimestampCheck = (timestamp) => {
    const timestampDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - timestampDate;
    const oneHourInMilliS = 3600000; // One hour converted to milliseconds
    if (timeDifference > oneHourInMilliS - 360000) {
      return false; //subtracted 10 minutes from one hour
    } else {
      return true;
    }
  };

  const originalTimestamp = props.recipe.timestamp;
  const date = new Date(originalTimestamp);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedTimestamp = `${month} ${day}, ${year}`;

  return (
    <Card sx={{ width: 345 }} className='card'>
      <CardHeader
        className='card-header-section'
        action={
          <IconButton
            onClick={() => handleShowFullRecipeModal(props.recipe)}
            aria-label='settings'
          >
            <LaunchIcon />
          </IconButton>
        }
        title={props.recipe.dishName}
        subheader={formattedTimestamp}
      />
      {handleTimestampCheck(props.recipe.timestamp) ? (
        <CardMedia
          id='card-image-container'
          component='img'
          height='194'
          image={props.recipe.imageUrl}
          alt={props.recipe.dishName}
        />
      ) : (
        <CardMedia
          id='card-image-container'
          component='img'
          height='194'
          title='AI-generated images are retained for only one hour. After this period, a default image will replace them.'
          image='../images/recipe-image-placeholder.png'
          alt={props.recipe.dishName}
        />
      )}
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {props.recipe.dishDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
