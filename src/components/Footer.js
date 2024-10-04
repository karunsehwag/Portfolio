// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copy}></p>
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/karun-choudhary-108982191" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/karunsehwag" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copy: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Space between icons
  },
  icon: {
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  iconHover: {
    color: '#61dafb', // Change color on hover
  },
};

export default Footer;
