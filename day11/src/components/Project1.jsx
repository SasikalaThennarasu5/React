import React, { useState, useEffect } from 'react';

const Project1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Mini Project 1: Counter with Auto Update</h2>
      <p>Auto Counter: {count}</p>
    </div>
  );
};

export default Project1;
