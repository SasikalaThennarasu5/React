import React, { useState } from 'react';

const Task14 = () => {
  const [advice, setAdvice] = useState('');

  const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  return (
    <div className="task">
      <h2>Task14: Advice Generator</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <p>{advice}</p>
    </div>
  );
};

export default Task14;
