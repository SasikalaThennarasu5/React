import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Task7 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task 7: Dynamic Context Value</h2>
      <p>Dynamic Value: {value}</p>
    </div>
  );
};

export default Task7;
