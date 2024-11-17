import React from 'react';

const About = () => {
  return (
    <section className="about-me" style={{ padding: '30px', backgroundColor: '#e9ecef', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>About Me</h2>
      <p style={{ color: '#555', marginBottom: '20px', fontSize: '1.1em' }}>
        I'm a motivated <strong>Software Engineering student</strong> in my final semester at Braude College of Engineering. With a strong foundation in programming, problem-solving, and teamwork, I'm eager to contribute to innovative projects and further develop my skills in real-world applications.
      </p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px', color: '#555' }}><span role="img" aria-label="graduation cap">🎓</span> GPA of 90.</li>
        <li style={{ marginBottom: '10px', color: '#555' }}><span role="img" aria-label="medal">🏅</span> Dean's List recipient twice.</li>
        <li style={{ marginBottom: '10px', color: '#555' }}><span role="img" aria-label="link">🔗</span> Find me on <a href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>.</li>
      </ul>
    </section>
  );
};

export default About;

