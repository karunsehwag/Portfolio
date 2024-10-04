// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section style={styles.experience}>
      <h2>Experience</h2>
      <ul>
        <li>Software Engineer at ABC Company (2021 - Present)</li>
        <li>Frontend Developer at XYZ Corp (2019 - 2021)</li>
      </ul>
    </section>
  );
}

const styles = {
  experience: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
};

export default Experience;
