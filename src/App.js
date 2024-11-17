import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="portfolio" style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <header className="portfolio-header" style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Hi, I'm Yuval Rozner 👋</h1>
      </header>
      <section className="about-me" style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>About Me</h2>
        <p>
          I'm a motivated <strong>Software Engineering student</strong> in my final semester at Braude College of Engineering. With a strong foundation in programming, problem-solving, and teamwork, I'm eager to contribute to innovative projects and further develop my skills in real-world applications.
        </p>
        <ul>
          <li>🎓 GPA of 90.</li>
          <li>🏅 Dean's List recipient twice.</li>
          <li>🔗 Find me on <a href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>LinkedIn</a>.</li>
        </ul>
      </section>
      <section className="projects" style={{ padding: '20px' }}>
        <h2>Projects</h2>
        <p>Here are some notable projects (repositories) on my GitHub. Some are personal projects, while others are collaborative efforts where I contributed as part of a team. Check them out to see my skills in action!</p>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/YuvalRozner/WeatherNet" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>WeatherNet</a></h3>
            <p>Weather Forecasting Using Machine Learning.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/YuvalRozner/Icook" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Icook</a></h3>
            <p>Interactive Cooking Website. JavaFX GUI.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/DorShabat/Cryptology-Project" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Cryptology-Project</a></h3>
            <p>Secure Payment with Server Identification Using Schnorr Signature, SM4, and ECDH.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/DorShabat/Math_Expression_Parser" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Math_Expression_Parser</a></h3>
            <p>Mathematical Expression Evaluation and Differentiation Using LR Parser.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/YuvalRozner/Adaptive_Huffman" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Adaptive_Huffman</a></h3>
            <p>Python implementation of Adaptive Huffman Compression Algorithm.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/YuvalRozner/CEMS" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>CEMS - Exams management system</a></h3>
            <p>Computerized Examination Management System.</p>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <h3><a href="https://github.com/YuvalRozner/Minesweeper" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Minesweeper</a></h3>
            <p>Java Minesweeper game.</p>
          </li>
        </ul>
        <p>Feel free to explore these repositories to see more about my development style, coding standards, and project organization.</p>
      </section>
      <section className="contact" style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>Get in Touch</h2>
        <ul>
          <li>📧 Email: <a href="mailto:yuvalrozner98@gmail.com" style={{ color: '#61dafb' }}>yuvalrozner98@gmail.com</a></li>
          <li>🔗 LinkedIn: <a href="https://linkedin.com/in/yuval-rozner" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Yuval Rozner</a></li>
          <li>🔗 GitHub: <a href="https://github.com/YuvalRozner" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>YuvalRozner</a></li>
        </ul>
        <p>Thanks for stopping by my profile! I'm always open to new opportunities and collaborations, so don't hesitate to reach out.</p>
      </section>
    </div>
  );
}

export default App;

