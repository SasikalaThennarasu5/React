import React from 'react';
function Project1() {
  const fruits = ['Apple', 'Mango', 'Pineapple'];
  return (
    <>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}
export default Project1;