import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Luck is on my side! </h1>
          <p>"And, by the way, he's not the Messiah, he's a very naughty boy!</p>
          <div className='gpt3__header-content-input'>
            <input type='email' placeholder="Your eMail address"></input>
            <button type='button'>Get Started</button>
          </div>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} />
        </div>
    </div>
  )
}

export default Header