// Task4.jsx - State Update on Button Click
import { useState } from 'react';
const Task4 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Task4;
