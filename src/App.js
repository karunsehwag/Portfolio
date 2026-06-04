// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import CourseWork from './components/CourseWork';
import Achievements from './components/Achievements';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div style={styles.container}>
        <About />
        <Education />
        <CourseWork />
        <Projects />
        <Skills />
        <Achievements />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
};

export default App;