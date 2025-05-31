import React, { useState } from 'react';
import Timer from './Timer';

const Project3 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Mini Project 3: Show/Hide Timer</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Timer' : 'Show Timer'}
      </button>
      {show && <Timer />}
    </div>
  );
};

export default Project3;
