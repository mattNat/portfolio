import React, { Component } from 'react';
import NavBar from './components/navbar';

import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <a name='home'></a>
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
        <a name='aboutMe'></a>        
        <AboutMe/>
        <Projects/>
      </div>
    );
  }
}

export default App;
