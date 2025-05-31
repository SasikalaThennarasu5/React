import React, { useState, useEffect } from 'react';

const Task9 = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(`Input Value: ${input}`);
  }, [input]);

  return (
    <div>
      <h2>Task 9: Form Input Logging</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default Task9;
