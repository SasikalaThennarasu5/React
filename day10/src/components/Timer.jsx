import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <p>Timer: {count} sec</p>;
};

export default Timer;
