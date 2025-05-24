import React from 'react';
function Task7() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
export default Task7;