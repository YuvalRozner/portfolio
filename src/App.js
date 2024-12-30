import React, { useEffect, useState } from 'react';
import TopBar from './components/headerAndFooter/topBar';
import Footer from './components/headerAndFooter/footer';
import Header from './components/headerAndFooter/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ProjectsView from './components/projects/projectsView';

function App() {
  const [viewMode, setViewMode] = useState('cards');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // const functionUrl = 'https://us-central1-yuval-portfolio.cloudfunctions.net/app';
    const functionUrl = 'https://flask-app-244769483465.us-central1.run.app/';

    fetch(functionUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error.message));
  }, []);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'list' : 'cards'));
  };


  return (
    <div className="portfolio" style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <TopBar />
      <Header />
      <div className="App">
        <h1>Message from Server:</h1>
        <p>{message}</p>
      </div>
      <About />
      <ProjectsView viewMode={viewMode} toggleViewMode={toggleViewMode} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
