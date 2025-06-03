import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Task4 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task 4: Access Context with useContext</h2>
      <p>Context Value: {value}</p>
    </div>
  );
};

export default Task4;