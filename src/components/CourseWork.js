// src/components/CourseWork.js
import React, { useState } from 'react';
import './CourseWork.css'; // Import the CSS file for styles
import { FaLaptopCode, FaDatabase, FaRobot, FaBrain, FaDesktop, FaNetworkWired, FaMicrochip, FaChartLine, FaBars, FaCode } from 'react-icons/fa';


const courseData = [
  { title: 'Web Development Bootcamp', description: 'A comprehensive bootcamp focusing on HTML, CSS, JavaScript, and React.', icon: <FaLaptopCode /> },
  { title: 'Operating System', description: 'Learned about process management, memory management, and file systems.', icon: <FaDesktop /> },
  { title: 'Database Management System', description: 'Studied relational databases, SQL, and data modeling.', icon: <FaDatabase /> },
  { title: 'Computer Networks', description: 'Explored network architectures, protocols, and security.', icon: <FaNetworkWired /> },
  { title: 'Computer Architecture', description: 'Understanding CPU design, memory hierarchy, and instruction sets.', icon: <FaMicrochip /> },
  { title: 'Statistical Methods in Artificial Intelligence', description: 'Applied statistical techniques for data analysis and modeling in AI.', icon: <FaChartLine /> },
  { title: 'Data Structures', description: 'Learned about arrays, linked lists, stacks, queues, and trees.', icon: <FaBars /> },
  { title: 'Algorithms', description: 'Studied sorting, searching, and optimization algorithms.', icon: <FaCode /> },
];


function CourseWork() {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section style={styles.courseWork}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Course Work</h2>
        
        <div style={styles.courseList}>
          {courseData.map((course, index) => (
            <div
              key={index}
              style={{
                ...styles.courseCard,
                ...(hoveredCourse === course.title ? styles.courseCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCourse(course.title)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div style={styles.icon}>{course.icon}</div>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <p
                style={{
                  ...styles.courseDescription,
                  opacity: hoveredCourse === course.title ? 1 : 0, // Control visibility with opacity
                  transition: 'opacity 0.3s ease', // Smooth transition for opacity
                }}
              >
                {course.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  courseWork: {
    backgroundColor: '#ffffff', // Background color for the course work section
    padding: '40px 0', // Reduced padding for less space
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
    marginBottom: '20px', // Reduced margin for the heading
    color: '#333',
  },
  courseList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  courseCard: {
    background: 'linear-gradient(to bottom right, #e0f7fa, #fce4ec)', // Lighter gradient background
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow for a more elevated look
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for shadow and transform
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transform: 'scale(1)', // Initial scale
  },
  icon: {
    fontSize: '2rem', // Icon size
    marginBottom: '10px',
    color: '#00796b', // Changed icon color for better visibility
  },
  courseTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#444', // Changed title color for better visibility
  },
  courseDescription: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '10px',
    opacity: 0, // Start hidden
    transition: 'opacity 0.3s ease', // Smooth transition for opacity
  },
  courseCardHover: {
    transform: 'scale(1.05)', // Slightly enlarge on hover
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // More prominent shadow on hover
  },
};

export default CourseWork;
