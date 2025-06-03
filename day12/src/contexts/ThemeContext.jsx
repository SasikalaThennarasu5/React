import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'Light',
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'Light' ? 'Dark' : 'Light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
