import React, { useEffect } from 'react';

const Task6 = () => {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return (
    <div>
      <h2>Task 6: useEffect with Cleanup Function</h2>
    </div>
  );
};

export default Task6;
