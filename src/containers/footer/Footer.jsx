import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to get ahead of the world?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='logo' />
        <p>Echeverria 222, Dolores, Buenos Aires, Argentina.</p>
      </div>
    </div>
  )
}

export default Footer