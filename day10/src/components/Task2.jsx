import React, { useEffect } from 'react';

const Task2 = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <h2>Task 2: Basic useEffect Example</h2>
    </div>
  );
};

export default Task2;
