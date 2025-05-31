import React, { useEffect } from 'react';

const Task3 = () => {
  useEffect(() => {
    console.log("This runs only once when component mounts.");
  }, []);

  return (
    <div>
      <h2>Task 3: useEffect with Empty Dependency Array</h2>
    </div>
  );
};

export default Task3;
