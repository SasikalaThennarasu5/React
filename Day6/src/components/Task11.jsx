// Task11.jsx - Add Item to List
import { useState } from 'react';
const Task11 = () => {
  const [tasks, setTasks] = useState(['Task 1']);
  const addTask = () => setTasks([...tasks, `Task ${tasks.length + 1}`]);
  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};
export default Task11;