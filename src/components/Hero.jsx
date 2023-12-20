'use strict';

import React from 'react';
import '../styles/Hero.css';
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <div id='hero-container'>
      <div id='hero-left'>
        <h2>Infinite recipes,<br /> one click away</h2>
        <div id='hero-buttons'>
          <Button variant='secondary' id='see-recipes-button' size='lg'>
            See some recipes
          </Button>
          <Button variant='success' id='try-it-button' size='lg'>
            Try it!
          </Button>
        </div>
      </div>
      <div id='hero-right'>
        <img id='hero-image' src='../images/pizza.png'></img>
      </div>
    </div>
  );
}

export default Hero;
