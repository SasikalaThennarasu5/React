import React from 'react';
function Task8() {
  const items = ['One', 'Two', 'Three'];
  return (
    <ul>
      {items.map(item => (
        <li>{item}</li> // Missing key will generate warning
      ))}
    </ul>
  );
}
export default Task8;