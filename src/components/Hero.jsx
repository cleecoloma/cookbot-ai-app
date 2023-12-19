'use strict';

import React from 'react';
import '../styles/Hero.css';
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <div id='hero-container'>
      <div id='hero-left'>
        <h2>Infinite recipes, one click away</h2>
        <div>
          <Button variant='success'>See some recipes</Button>
          <Button variant='success' id='try-it-button'>Try it</Button>
        </div>
      </div>
      <div id='hero-right'>
        <img id='hero-image' src='../images/pizza.png'></img>
      </div>
    </div>
  );
}

export default Hero;
