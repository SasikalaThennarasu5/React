// Project2.jsx - Name Display
import { useState } from 'react';
const Project2 = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <h2>Name Display</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
};
export default Project2;
