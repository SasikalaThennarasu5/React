// Project4.jsx - Light Toggle
import { useState } from 'react';
const Project4 = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <h2>Light Toggle</h2>
      <p>{isOn ? 'Light ON' : 'Light OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
};
export default Project4;
