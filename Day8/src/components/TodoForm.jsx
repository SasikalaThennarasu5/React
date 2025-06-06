import { useState } from "react";
const TodoForm = ({ addTask }) => {
 const [task, setTask] = useState("");
 const handleSubmit = (e) => {
 e.preventDefault();
 if (task.trim()) {
 addTask(task);
 setTask("");
 }
 };
 return (
 <form onSubmit={handleSubmit}>
 <input
 type="text"
 value={task}
 onChange={(e) => setTask(e.target.value)}
 placeholder="Enter a task..."
 />
 <button type="submit">Add Task</button>
 </form>
 );
};
export default TodoForm;