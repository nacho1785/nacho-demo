import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src = {possibilityImage} alt = 'possibility' />
        </div>
        <div className='gpt3__possibility-content'>
          <h4>Request early access to get started</h4>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>According to Palin, the mother of all sketches was inspired by a mechanic he hired who explained away every fault on his car with increasingly ridiculous justifications (“The doors have fallen off!”... “Well, they do that...”)</p>
          <h4>Request early access to get started</h4>
        </div>
    </div>
  )
}

export default Possibility