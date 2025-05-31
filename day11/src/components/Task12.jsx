import React, { useState, useEffect } from 'react';

const Task12 = () => {
  const [users, setUsers] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [clicked]);

  return (
    <div>
      <h2>Task 12: Fetch Data on Button Click</h2>
      <button onClick={() => setClicked(true)}>Load Users</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task12;
