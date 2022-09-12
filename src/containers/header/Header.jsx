import React from 'react';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Luck is on my side!... said the unlucky man.</h1>
          <p>"And, by the way, he's not the Messiah, he's a very naughty boy!</p>
         
         <div className='gpt3__header-content__input'>
            <input type='email' placeholder="Your eMail address" />
            <button type='button'>Get Started</button>
          </div>
        
          <div className='gpt3__header-content__people'>
            <img src={people}  alt='people'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        < div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
      </div>
  )
}

export default Header;