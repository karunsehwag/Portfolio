// src/components/Achievements.js
import React from 'react';
//import './Achievements.css'; // Import the CSS file for styles
import { FaTrophy } from 'react-icons/fa'; // Import trophy icon

function Achievements() {
  const achievementsData = [
    { year: 2021, achievement: 'Completed a Data Science Bootcamp with distinction.' },
    { year: 2020, achievement: 'Received the Dean’s List award for academic excellence.' },
    { year: 2019, achievement: 'Developed an award-winning project at the tech fair.' },
    { year: 2018, achievement: 'Participated in a national hackathon and won 2nd place.' },
  ];

  return (
    <section style={styles.achievements}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Achievements</h2>

        {achievementsData.map((item, index) => (
          <div key={index} className="achievementItem" style={styles.achievementItem}>
            <FaTrophy style={styles.icon} />
            <div style={styles.textContainer}>
              <p style={styles.year}>{item.year}</p>
              <p style={styles.description}>{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  achievements: {
    //backgroundColor: '#f5f5f5', // Soft background color for the achievements section
    padding: '40px 0', // Reduced padding for less space
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  container: {
    maxWidth: '600px', // Reduced max width for compactness
    margin: '0 auto',
    padding: '0 20px', // Padding for responsiveness
  },
  heading: {
    fontSize: '2rem', // Reduced font size for heading
    marginBottom: '20px', // Reduced margin below heading
    color: '#333',
  },
  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start', // Align items at the start
    marginBottom: '15px', // Reduced margin for achievement items
    transition: 'transform 0.3s', // Transition for hover effect
    justifyContent: 'flex-start', // Align items to the start
  },
  icon: {
    fontSize: '1.5rem', // Reduced font size for the icon
    color: '#ff9800', // Color for the trophy icon
    marginRight: '10px', // Space between icon and text
  },
  textContainer: {
    textAlign: 'left', // Align text to the left
  },
  year: {
    fontSize: '1.3rem', // Reduced font size for the year
    color: '#444',
    margin: '0', // Remove margin for compactness
  },
  description: {
    fontSize: '0.9rem', // Reduced font size for description
    lineHeight: '1.4', // Adjusted line height for compactness
    color: '#555',
    margin: '0', // Remove margin for compactness
  },
};

export default Achievements;
