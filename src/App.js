import React, { Component } from 'react';
import NavBar from './components/navbar';

import AboutMe from './components/aboutMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <div className='App-header'>
          <div className='text-box' >
            <h1 className='heading-primary'>
                <span className='heading-primary-main' >Matt</span>
                <span className='heading-primary-sub' >Full-Stack Web Developer</span>                
                {/* <span className='heading-primary-sub' >Math Background</span>                               */}
                <div className='btn-container'>
                  <button className='btn-landing'></button>
                </div>
            </h1>
          </div>
        </div>
        <AboutMe/>
        {/* <div className='row section-intro'>
          <div className='col-twelve'>

          <h1>About Me</h1>
          <h3>Let me introduce myself.</h3>

          <div class="intro-info">

            <img src={require('./img/IMG_5975.JPG')} alt="Profile Picture" width='100px'/>

            <p class="lead">Full stack developer with a strong background in mathematics and computational science. 
            Proficient in mobile-first responsive design, applying principles of test-driven-development to React 
            JavaScript ES5/ES6 framework. Extensive knowledge in data modelling from advanced engineering degree 
            and internship experience. Continuing education in Thinkful Engineering Immersion program with 
            algorithms and data structures.</p>
          </div>   			

          </div>   		
        </div> */}
      </div>
    );
  }
}

export default App;
