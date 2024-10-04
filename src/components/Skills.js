// src/components/Skills.js
import React, { useState } from 'react';

const skillsData = [
  { skill: 'JavaScript', level: 90 },
  { skill: 'React', level: 85 },
  { skill: 'Node.js', level: 80 },
  { skill: 'CSS', level: 75 },
  { skill: 'Python', level: 70 },
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section style={styles.skillsSection}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.skillsGrid}>
        {skillsData.map((skillObj, index) => (
          <div
            key={index}
            style={styles.skillCard}
            onMouseEnter={() => setHoveredSkill(skillObj.skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <h3 style={styles.skillName}>{skillObj.skill}</h3>
            <div style={styles.progressBarContainer}>
              <div
                style={{
                  ...styles.progressBar,
                  width: `${skillObj.level}%`,
                  backgroundColor:
                    hoveredSkill === skillObj.skill ? '#ff6347' : '#4caf50',
                }}
              ></div>
            </div>
            <p style={styles.skillLevel}>
              {hoveredSkill === skillObj.skill ? `Proficiency: ${skillObj.level}%` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  skillsSection: {
    padding: '50px 0',
   // backgroundColor: '#f0f0f0',
   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    position: 'relative',
  },
  skillName: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  progressBarContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  progressBar: {
    height: '100%',
    transition: 'width 0.4s ease',
  },
  skillLevel: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '10px',
    minHeight: '20px', // Set a fixed height for consistency
  },
};

export default Skills;
