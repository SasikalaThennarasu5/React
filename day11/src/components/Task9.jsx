import React, { useState, useEffect } from 'react';

const Task9 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Task 9: Timer with Cleanup Function</h2>
      <p>Timer: {count}</p>
    </div>
  );
};

export default Task9;
