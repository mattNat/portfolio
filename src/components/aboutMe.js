import React, { Component } from 'react';
import ProfilePicture from '../img/IMG_5975.JPG';
import '../style/aboutMe.css';

export default function AboutMe() {
  return (
    <div className='row about-me'>
      <div className='col-twelve section-intro'>

        <h1>About Me</h1>
        <h3>Let me introduce myself.</h3>

        <div class="intro-info">

          <img src={ProfilePicture} alt="Profile Picture" width='150px'/>

          <p class="lead">Full stack developer with a strong background math. 
          Proficient in mobile-first responsive design, applying principles of test-driven-development to React 
          JavaScript ES5/ES6 framework. Extensive knowledge in data modelling from advanced engineering degree 
          and internship experience. Continuing education in Thinkful Engineering Immersion program with 
          algorithms and data structures.</p>
        </div>   			
      </div>   		
    </div>
  );
}