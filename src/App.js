import React from 'react';
import TopBar from './components/headerAndFooter/topBar';
import Footer from './components/headerAndFooter/footer';
import ProjectsList from './components/projects/projectsList';
import Header from './components/headerAndFooter/header';
import About from './components/about/about';
import Contact from './components/contact/contact';

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
