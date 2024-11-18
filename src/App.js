import React, { useState } from 'react';
import TopBar from './components/headerAndFooter/topBar';
import Footer from './components/headerAndFooter/footer';
import Header from './components/headerAndFooter/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ProjectsView from './components/projects/projectsView';

function App() {
  const [viewMode, setViewMode] = useState('cards');

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'list' : 'cards'));
  };

  return (
    <div className="portfolio" style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <TopBar />
      <Header />
      <About />
      <ProjectsView viewMode={viewMode} toggleViewMode={toggleViewMode} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
