import React, { useState, useEffect } from 'react';

const Project3 = () => {
  const [showData, setShowData] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (showData) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [showData]);

  return (
    <div>
      <h2>Mini Project 3: Toggle API Data</h2>
      <button onClick={() => setShowData(prev => !prev)}>
        {showData ? 'Hide' : 'Show'} Users
      </button>
      {showData && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Project3;
