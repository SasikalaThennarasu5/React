import React, { useState } from 'react';

const Task5 = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (text.trim() === '') return;
    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = text;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, text]);
    }
    setText('');
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setText(items[index]);
    setEditIndex(index);
  };

  return (
    <div className="task">
      <h2>Task5: Dynamic List</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem}>{editIndex !== null ? 'Update' : 'Add'}</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => editItem(i)}>Edit</button>
            <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task5;
