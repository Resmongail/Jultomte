import React from 'react';
import './Snow.css';

const Snow = () => {
  return (
    <div className="snow-container">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--position': `${Math.random() * 100}%`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Snow;