import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([
    { title: "Do Homework", completed: false },
    { title: "Exercise", completed: false },
  ]);

  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
export default TaskManager