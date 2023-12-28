'use strict';

import React from 'react';
import '../styles/HowTo.css';

function HowTo({ id }) {
  return (
    <div className='how-to' id={id}>
      <h3>How it works?</h3>
      <img
        className='how-to-image how-to-desktop'
        src='../../images/how-to-shrimp.gif'
        alt='How it works for desktop'
      />
      <img
        className='how-to-image how-to-tablet'
        src='../../images/how-to-shrimp-tablet.gif'
        alt='How it works for tablet'
      />
      <img
        className='how-to-image how-to-mobile'
        src='../../images/how-to-shrimp-mobile.gif'
        alt='How it works for mobile'
      />
    </div>
  );
}

export default HowTo;