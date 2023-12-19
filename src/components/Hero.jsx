'use strict';

import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div id='hero-container'>
      <div id='hero-left'>
        <h2>
          Infinite recipes, one click away
        </h2>
      </div>
      <div id='hero-right'>
        <img id='hero-image' src='../images/pizza.png'></img>
      </div>
    </div>
  );
}

export default Hero;
