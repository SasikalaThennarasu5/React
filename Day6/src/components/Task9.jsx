import { useState } from 'react';

function Task9() {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Reset State</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Task9;
