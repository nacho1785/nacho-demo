import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";



const WhatGPT3 = () => (
    <div className= "gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title= "What is Monty Python?" text= "Monty Python (also collectively known as the Pythons) were a British surreal comedy troupe who created the sketch comedy television show Monty Python's Flying Circus, which first aired on the BBC in 1969." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Please, please, please listen! I've got one or two things to say.</h1>
        <p>Am I the Messiah?</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Holy Grail (1975)" text= "Monty Python and the Holy Grail was based on Arthurian legend and was directed by Jones and Gilliam." />
        <Feature title="Life of Brian (1979)" text= "It was a satire on those who for the next 2,000 years 'couldn't agree on what Jesus was saying about peace and love'. "  />
        <Feature title= "The Meaning of Life (1983)" text= "The Meaning of Life is embellished with some of the group's most bizarre and disturbing moments, as well as various elaborate musical numbers, which include 'Galaxy Song' (performed by Idle) and 'Every Sperm Is Sacred' (performed by Palin and Jones)." />
      </div>
    </div>
  
);

export default WhatGPT3;