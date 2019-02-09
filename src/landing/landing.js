import React, { Component } from 'react';
import './landing.scss';

const Landing = () => {
  return(
    <div className="landing">
      <section>
        <h1>Stefan.</h1>
        <span className="avatar"/>
        <p>
          I rent my labor out for the following services:
        </p>

        <ul>
          <li>Web Development</li>
          <li>Writing</li>
        </ul>
      </section>
    </div>
  )
};

export default Landing;
