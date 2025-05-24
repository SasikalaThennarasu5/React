// Task8.jsx - Input Field with State
import { useState } from 'react';
const Task8 = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};
export default Task8;