import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Project2 = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <div>
      <h2>Mini Project 2: User Authentication</h2>
      <p>{isLoggedIn ? 'Welcome back, user!' : 'Please log in.'}</p>
      <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default Project2;