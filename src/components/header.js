import React from 'react';

const Header = () => {
  return (
    <header className="portfolio-header" style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
      <img 
        src="\yuval.png" 
        alt="Yuval Rozner" 
        style={{ borderRadius: '50%', marginBottom: '20px', width: '150px', height: '150px' }} 
      />
      <h1>Hi, I'm Yuval Rozner <span role="img" aria-label="waving hand">👋</span></h1>
      <p style={{ fontSize: '1.2em', marginTop: '10px' }}>
        Welcome to my portfolio! I'm a passionate Software Engineering student eager to make an impact in the tech world.
      </p>
    </header>
  );
};

export default Header;
