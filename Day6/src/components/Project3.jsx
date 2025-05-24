// Project3.jsx - Task List
import { useState } from 'react';
const Project3 = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeLastTask = () => setTasks(tasks.slice(0, -1));

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeLastTask}>Remove Last Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default Project3;