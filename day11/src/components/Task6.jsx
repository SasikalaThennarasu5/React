import React, { useEffect } from 'react';

const Task6 = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h2>Task 6: API Fetching with useEffect</h2>
      <p>Check the console for user data.</p>
    </div>
  );
};

export default Task6;
