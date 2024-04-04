

import React from 'react';
import './index.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Learning Portal</h1>
      <h2>What do you want to learn?</h2>
      <div className="button-container">
        <a href="/abcd-paint" className="button">ABCD</a>
        <a href="/num-paint" className="button">1234</a>
      </div>
    </div>
  );
};

export default WelcomePage;
