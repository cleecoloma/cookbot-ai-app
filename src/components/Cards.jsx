'use strict';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LaunchIcon from '@mui/icons-material/Launch';
import '../styles/Cards.css';

function Cards() {
  return (
      <Card sx={{ maxWidth: 345 }} className='card'>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <LaunchIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia
          component='img'
          height='194'
          image='/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <div className='card-icons'>
            <div className='card-icons-divs'>
              <HourglassBottomIcon />
              <p>PREP: </p>
            </div>
            <div className='card-icons-divs'>
              <AccessTimeIcon />
              <p>COOK: </p>
            </div>
            <div className='card-icons-divs'>
              <RestaurantIcon />
              <p>SERVING: </p>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}

export default Cards;
