'use strict';

import React from 'react';
import '../styles/HowTo.css';

function HowTo({ id }) {
  return (
    <div className='how-to' id={id}>
      <h3>
        How it works?
      </h3>
      <img src='https://placehold.co/500x600' />
    </div>
  );
}

export default HowTo;