import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <span className="logo-text">
        <span className="b-letter b1">B</span>
        <span className="it-text">IT</span>
        <span className="b-letter b2">B</span>
        <span className="buddies-text">UDDIES</span>
      </span>
      <div className="tagline">
        <span className="b-small b1">b</span>
        <span>eat it, </span>
        <span className="b-small b2">b</span>
        <span>ag it</span>
      </div>
    </div>
  );
};

export default Logo;