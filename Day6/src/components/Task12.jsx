// Task12.jsx - Remove Item from List
import { useState } from 'react';
const Task12 = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);
  const removeTask = () => setTasks(tasks.slice(0, -1));
  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <button onClick={removeTask}>Remove Last Task</button>
    </div>
  );
};
export default Task12;