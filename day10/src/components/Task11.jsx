import React, { useEffect } from 'react';

const Task11 = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Task 11: Fetching Data with Fake API</h2>
    </div>
  );
};

export default Task11;
