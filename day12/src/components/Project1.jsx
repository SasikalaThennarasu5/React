import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Project1 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const containerStyle = {
    backgroundColor: theme === 'Light' ? '#fff' : '#333',
    color: theme === 'Light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2>Mini Project 1: Theme Switcher</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Project1;
