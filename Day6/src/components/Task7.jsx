// Task7.jsx - Toggle Boolean State
import { useState } from 'react';
const Task7 = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This is visible content.</p>}
    </div>
  );
};
export default Task7;