// src/components/Education.js
import React from 'react';
import './Education.css'; // Import the CSS file for animations and styles
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa'; // Import icons from React Icons

function Education() {
  return (
    <section style={styles.education}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>
        
        <div className="educationItem" style={styles.educationItem}>
          <FaGraduationCap style={styles.icon} />
          <h3 style={styles.degree}>Bachelor of Science in Computer Science</h3>
          <p style={styles.school}>XYZ University, 2015 - 2019</p>
          <p style={styles.description}>
            Graduated with a focus on software engineering and web development.
            <br />
            CGPA: 3.8/4.0
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaUniversity style={styles.icon} />
          <h3 style={styles.degree}>Master of Science in Artificial Intelligence</h3>
          <p style={styles.school}>ABC Institute of Technology, 2019 - 2021</p>
          <p style={styles.description}>
            Specialized in machine learning and deep learning applications.
            <br />
            CGPA: 3.9/4.0
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaSchool style={styles.icon} />
          <h3 style={styles.degree}>12th Grade</h3>
          <p style={styles.school}>ABC High School, 2014 - 2015</p>
          <p style={styles.description}>
            Completed with a focus on Science and Mathematics. 
            <br />
            Marks: 85% | Grade: A
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaSchool style={styles.icon} />
          <h3 style={styles.degree}>10th Grade</h3>
          <p style={styles.school}>XYZ Secondary School, 2012 - 2014</p>
          <p style={styles.description}>
            Completed with a broad curriculum.
            <br />
            Marks: 90% | Grade: A+
          </p>
        </div>

      </div>
    </section>
  );
}

const styles = {
  education: {
   // background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', // Gradient background for the education section
    padding: '60px 0',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px', // Padding for responsiveness
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#333',
  },
  educationItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column', // Center the items
    marginBottom: '30px',
    transition: 'transform 0.3s', // Transition for hover effect
  },
  icon: {
    fontSize: '2rem',
    color: '#007bff', // Color for the icons
    marginBottom: '10px', // Space between icon and title
  },
  degree: {
    fontSize: '1.8rem',
    color: '#444',
  },
  school: {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default Education;
