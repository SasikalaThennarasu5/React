import React, { useEffect } from 'react';

const Task4 = () => {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return <p>Check console for "Component Mounted"</p>;
};

export default Task4;
