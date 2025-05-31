import React, { useEffect } from 'react';

const Task12 = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Fetching after delay...');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Task 12: Delayed API Fetching</h2>
    </div>
  );
};

export default Task12;
