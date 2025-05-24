import React from 'react';
function Project4() {
  const numbers = [12, 45, 67, 89, 23];
  return (
    <ul>
      {numbers.map((num, index) => (
        num > 50 && <li key={index}>{num}</li>
      ))}
    </ul>
  );
}
export default Project4;