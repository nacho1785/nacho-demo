import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to get ahead of the world?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
    </div>

    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='logo' />
        <p>Echeverria 222, Dolores, Buenos Aires, Argentina.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Echeverría 222, Dolores, 7100, AR.</p>
        <p>+54 9 11 4095 2882</p>
        <p>jorgeichapperon@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Nacho DEMO. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;