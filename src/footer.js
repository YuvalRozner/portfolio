import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#282c34', padding: '10px 20px', color: 'white', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Yuval Rozner. All rights reserved.</p>
      <nav className="footer-navigation" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a href="#about-me" style={{ color: '#61dafb', textDecoration: 'none' }}>About Me</a>
        <a href="#projects" style={{ color: '#61dafb', textDecoration: 'none' }}>Projects</a>
        <a href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>
          <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
