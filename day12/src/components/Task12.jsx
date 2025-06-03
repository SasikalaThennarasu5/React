import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Task12 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>Task 12: Theme Toggle using Context</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Task12;