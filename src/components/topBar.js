import React from 'react';

function TopBar() {
  return (
    <div className="top-bar" style={{ backgroundColor: '#282c34', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        Yuval Rozner
      </div>
      <nav className="navigation" style={{ display: 'flex', gap: '15px' }}>
        <a href="#about-me" style={{ color: '#61dafb', textDecoration: 'none' }}>About Me</a>
        <a href="#projects" style={{ color: '#61dafb', textDecoration: 'none' }}>Projects</a>
        <a href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>
          <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
        </a>
      </nav>
    </div>
  );
}

export default TopBar;
