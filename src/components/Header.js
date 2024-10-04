// src/components/Header.js
import React from 'react';
import backgroundImage from '../image.png'; // Ensure correct path
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={20} />
        </a>
        <a href="tel:+1234567890" className="icon-link">
          <FaPhone size={20} />
        </a>
        <a 
  href="#" 
  className="icon-link" 
  onClick={() => {
    console.log("Mailto link clicked");
    window.open('mailto:karunchoudhary2000@gmail.com');
  }}
>
  <FaEnvelope size={20} />
</a>

      </div>
      <div className="content">
        <h1 className="name">KARUN CHOUDHARY</h1>
        <p className="subtitle">Full-Stack Developer | Open Source Enthusiast</p>
        <button className="button" onClick={() => window.open('/resume.pdf')}>
          Download Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
