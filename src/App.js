import React from 'react';
import TopBar from './components/topBar';
import Footer from './components/footer';
import ProjectsList from './components/projectsList';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="portfolio" style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <TopBar />
      <Header />
      <About />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
