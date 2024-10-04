// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import CourseWork from './components/CourseWork';
import Achievements from './components/Achievements';  // Import the CourseWork component
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="app"> {/* Use the app class here */}
      <Header />
      <div style={styles.container}>
        <About />
        <Education />
        <CourseWork /> {/* Include the CourseWork component */}
        <Projects />
        
        <Skills />
        <Achievements /> {/* Include the Achievements section here */}
        {/* <Experience /> */}
        
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px', // Maximum width to keep content centered
    margin: '0 auto', // Center the content
    padding: '0 20px', // Padding for mobile responsiveness
  },
};

export default App;
