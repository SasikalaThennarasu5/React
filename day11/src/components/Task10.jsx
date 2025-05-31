import React, { useState } from 'react';

const Task10 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Task 10: Toggle Visibility with useState</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Paragraph
      </button>
      {visible && <p>This is a toggleable paragraph.</p>}
    </div>
  );
};

export default Task10;
