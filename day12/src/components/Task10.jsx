import React, { createContext, useContext } from 'react';

const ContextA = createContext("A");
const ContextB = createContext("B");

const Task10 = () => {
  const a = useContext(ContextA);
  const b = useContext(ContextB);
  return (
    <div>
      <h2>Task 10: Multiple Contexts</h2>
      <p>Context A: {a}</p>
      <p>Context B: {b}</p>
    </div>
  );
};

export default Task10;