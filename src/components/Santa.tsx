import React from 'react';
import './Santa.css';

const Santa = () => {
  return (
    <div className="santa-container">
      <div className="santa-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1577373401344-65f6ca691ad7?auto=format&fit=crop&w=400&q=80"
          alt="Santa Claus"
          className="santa-image"
          loading="lazy"
        />
        <div className="santa-sparkles"></div>
      </div>
      <div className="santa-message">
        <span className="wave">👋</span> Ho Ho Ho, Merry Christmas!
      </div>
    </div>
  );
};

export default Santa;