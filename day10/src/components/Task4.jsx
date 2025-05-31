import React, { useEffect, useState } from 'react';

const Task4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Task 4: useEffect with Dependency Array</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task4;
