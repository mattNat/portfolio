import React, { Component } from 'react';
import '../style/aboutMe.css';

export default function AboutMe() {
  return (
    <div className='row section-intro about-me'>
      <div className='col-twelve'>

        <h1>About Me</h1>
        <h3>Let me introduce myself.</h3>

        <div class="intro-info">

          <img src={require('../img/IMG_5975.JPG')} alt="Profile Picture" width='100px'/>

          <p class="lead">Full stack developer with a strong background in mathematics and computational science. 
          Proficient in mobile-first responsive design, applying principles of test-driven-development to React 
          JavaScript ES5/ES6 framework. Extensive knowledge in data modelling from advanced engineering degree 
          and internship experience. Continuing education in Thinkful Engineering Immersion program with 
          algorithms and data structures.</p>
        </div>   			
      </div>   		
    </div>
  );
}