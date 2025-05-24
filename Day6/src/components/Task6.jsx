// Task6.jsx - Multiple useState Hooks
import { useState } from 'react';
const Task6 = () => {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};
export default Task6;