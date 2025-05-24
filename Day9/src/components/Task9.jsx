import React from 'react';
function Task9() {
  const users = ['Alice', 'Bob', 'Charlie'];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
export default Task9;