// Task10.jsx - State with Arrays
import { useState } from 'react';
const Task10 = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default Task10;