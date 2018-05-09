import React, { Component } from 'react';
import '../style/navbar.css';

export default function NavBar() {
  return (
    <header role='banner' className='header'>
      <div className="container">
        <h1 className="logo"></h1>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>            
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}