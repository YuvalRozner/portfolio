import React from 'react';

const Contact = () => {
  return (
    <section className="contact" style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>Get in Touch</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px', color: '#555' }}>
          <span role="img" aria-label="email">📧</span> Email: 
          <a href="mailto:yuvalrozner98@gmail.com" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}> yuvalrozner98@gmail.com</a>
        </li>
        <li style={{ marginBottom: '10px', color: '#555' }}>
          <span role="img" aria-label="link">🔗</span> LinkedIn: 
          <a href="https://linkedin.com/in/yuval-rozner" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}> Yuval Rozner</a>
        </li>
        <li style={{ marginBottom: '10px', color: '#555' }}>
          <span role="img" aria-label="link">🔗</span> GitHub: 
          <a href="https://github.com/YuvalRozner" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}> YuvalRozner</a>
        </li>
      </ul>
      <p style={{ color: '#666', marginTop: '20px' }}>
        Thanks for stopping by my profile! I'm always open to new opportunities and collaborations, so don't hesitate to reach out.
      </p>
    </section>
  );
};

export default Contact;

