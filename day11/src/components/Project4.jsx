import React, { useState, useEffect } from 'react';

const Project4 = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content));
  };

  useEffect(() => {
    fetchQuote(); // initial fetch
    const interval = setInterval(fetchQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Mini Project 4: Random Quote Generator</h2>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default Project4;
