import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App = () => {
 const [tasks, setTasks] = useState([]);
const addTask = (task) => {
 setTasks([...tasks, task]);
 };
 const deleteTask = (index) => {
 setTasks(tasks.filter((_, i) => i !== index));
 };
 return (
 <div>
 <h1>To-Do List</h1>
 <TodoForm addTask={addTask} />
 <TodoList tasks={tasks} deleteTask={deleteTask} />
 </div>
 );
};
export default App;