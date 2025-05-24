function TaskList() {
  const tasks = [
    { title: "Learn React", completed: true },
    { title: "Build App", completed: false },
  ];
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{ fontWeight: task.completed ? "bold" : "normal" }}
        >
          {task.title}
        </li>
      ))}
    </ul>
  );
}
export default TaskList