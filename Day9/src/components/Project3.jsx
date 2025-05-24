import React from 'react';
function Project3() {
  const tasks = [
    { id: 1, title: 'Do laundry', completed: true },
    { id: 2, title: 'Buy groceries', completed: false },
    { id: 3, title: 'Workout', completed: true },
  ];
  return (
    <ul>
      {tasks.map(task => (
        task.completed && <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
export default Project3;