import React, { useState, useEffect } from 'react';

const Task7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="task">
      <h2>Task7: User Directory</h2>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Task7;
