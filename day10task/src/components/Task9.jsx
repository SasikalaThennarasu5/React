import React, { useState } from 'react';

const Task9 = () => {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <div className="task">
      <h2>Task9: Random Joke Generator</h2>
      <button onClick={getJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Task9;
