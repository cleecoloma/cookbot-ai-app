'use strict';

import React from 'react';
import '../styles/HowTo.css';

function HowTo({ id }) {
  return (
    <div className='how-to' id={id}>
      <p>
        Follow the simple steps below to create your very own delicious recipes
        and start sharing your culinary masterpieces with the world!
      </p>
      <img src='https://placehold.co/500x600' />
    </div>
  );
}

export default HowTo;