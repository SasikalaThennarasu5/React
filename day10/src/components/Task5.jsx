import React, { useState, useEffect } from 'react';

const Task5 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    console.log(`Name changed to: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Age changed to: ${age}`);
  }, [age]);

  return (
    <div>
      <h2>Task 5: Multiple useEffect Hooks</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};

export default Task5;
