import React, { useState, useEffect } from 'react';

const Task2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Updated count:', count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

export default Task2;
