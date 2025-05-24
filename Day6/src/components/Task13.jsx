// Task13.jsx - Conditional Rendering
import { useState } from 'react';
const Task13 = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      {tasks.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Task13;
