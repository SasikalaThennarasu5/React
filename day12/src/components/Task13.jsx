import React, { useContext } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';

const Task13 = () => {
  const user = useContext(UserDataContext);
  return (
    <div>
      <h2>Task 13: Context with API Data</h2>
      {user ? <p>User: {user.name}</p> : <p>Loading user data...</p>}
    </div>
  );
};

export default Task13;