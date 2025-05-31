import React, { useState, useEffect } from 'react';

const Task3 = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log("Input value:", inputValue);
  }, [inputValue]);

  return (
    <div>
      <h2>Task 3: Input Field with useState and useEffect</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default Task3;
