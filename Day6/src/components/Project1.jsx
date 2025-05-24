// Project1.jsx - Counter App
import { useState } from 'react';
const Project1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
export default Project1;
