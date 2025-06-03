import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Task6 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task 6: Default Context Value</h2>
      <p>Default Value: {value}</p>
    </div>
  );
};

export default Task6;