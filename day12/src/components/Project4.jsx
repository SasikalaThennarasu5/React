import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const translations = {
  en: {
    greeting: 'Hello',
    switch: 'Switch to French'
  },
  fr: {
    greeting: 'Bonjour',
    switch: 'Passer à l\'anglais'
  }
};

const Project4 = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { greeting, switch: switchLabel } = translations[language];

  return (
    <div>
      <h2>Mini Project 4: Language Selector</h2>
      <p>{greeting}! (Current language: {language})</p>
      <button onClick={toggleLanguage}>{switchLabel}</button>
    </div>
  );
};

export default Project4;
