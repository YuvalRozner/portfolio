import React from 'react';
import './App.css';
import TopBar from './topBar';
import Footer from './footer';
import Projects from './projects';
import Header from './header';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <div className="portfolio" style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <TopBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
