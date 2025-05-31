import React, { useState } from 'react';

const Task8 = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data));
  };

  return (
    <div>
      <h2>Task 8: Conditional Data Fetching</h2>
      <button onClick={fetchData}>Fetch Users</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task8;
