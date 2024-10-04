// src/components/About.js
import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file for styles
import { FaUserCircle } from 'react-icons/fa'; // Import an icon

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      style={{ ...styles.about, backgroundImage: 'url("path_to_your_background_image.jpg")' }} // Add a background image
    >
      <div style={styles.container}>
        <FaUserCircle style={styles.icon} /> {/* User icon */}
        <h2 style={{ ...styles.heading, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
          About Me
        </h2>
        <p style={{ ...styles.text, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s' }}>
          I'm John Doe, a passionate Full-Stack Developer with expertise in building web applications. 
          I specialize in creating efficient and scalable solutions using modern web technologies.
        </p>
        <p style={{ ...styles.text, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s' }}>
          Apart from coding, I enjoy traveling and contributing to open-source projects, continuously learning and exploring new technologies.
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: '#fff',
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center',
    padding: '60px 0', // Add vertical padding for more space
    textAlign: 'center',
    color: '#444', // Default text color
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px', // Padding for responsiveness
    position: 'relative', // Position relative for the icon
    zIndex: 1, // Ensure text is above the background
  },
  icon: {
    fontSize: '4rem',
    color: '#ff9800', // Icon color
    marginBottom: '20px', // Space between icon and heading
    animation: 'bounce 1s infinite', // Simple bounce animation
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    opacity: 0, // Start invisible, transition will handle opacity
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#555',
    transition: 'color 0.3s ease',
  },
};

export default About;
