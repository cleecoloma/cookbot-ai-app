'use strict';

import React from 'react';
import '../styles/Hero.css';
import { Button } from 'react-bootstrap';

function Hero({ id }) {
  return (
    <div className='hero-container' id={id}>
      <div id='hero-left'>
        <h2>
          Infinite recipes,
          <br /> one click away
        </h2>
        <div id='hero-buttons'>
          <Button href='#recipebook' id='see-recipes-button' size='lg'>
            See some recipes
          </Button>
          <Button href='#howitworks' id='how-button' size='lg'>
            How it works?
          </Button>
        </div>
      </div>
      <div id='hero-right'>
        <img
          id='hero-image'
          src='../images/pizza.png'
        ></img>
      </div>
    </div>
  );
}

export default Hero;
