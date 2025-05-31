import React, { useState, useEffect } from 'react';

const Task10 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('Counter is Even');
    }
  }, [count]);

  return (
    <div>
      <h2>Task 10: Condition-Based Side Effects</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task10;
