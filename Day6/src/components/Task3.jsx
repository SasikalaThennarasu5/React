// Task3.jsx - Basic useState Example

import { useState } from 'react';

const Task3 = () => {
  const [count, setCount] = useState(0);
  return <div>Counter: {count}</div>;
};
export default Task3;