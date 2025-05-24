import { useState } from "react";

function EventProject1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Mini Project 1: Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EventProject1;
