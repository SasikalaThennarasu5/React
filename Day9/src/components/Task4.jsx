import React from 'react';
function Task4() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item}</p>
        </React.Fragment>
      ))}
    </>
  );
}
export default Task4;