// Task5.jsx - State with Strings
import { useState } from 'react';
const Task5 = () => {
  const [name, setName] = useState('John');
  return (
    <div>
      <div>Name: {name}</div>
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
};
export default Task5;