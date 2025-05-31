import React, { useState } from 'react';

const emojiDictionary = {
  "😊": "Smiling",
  "😂": "Laughing",
  "😢": "Crying",
  "🔥": "Fire",
  "❤️": "Love",
  "🎉": "Celebration"
};

const Task4 = () => {
  const [meaning, setMeaning] = useState('');

  const handleInputChange = (e) => {
    const emoji = e.target.value;
    setMeaning(emojiDictionary[emoji] || 'Emoji not found');
  };

  return (
    <div className="task">
      <h2>Task4: Emoji Interpreter</h2>
      <input type="text" placeholder="Enter emoji" onChange={handleInputChange} />
      <p>{meaning}</p>
      <div>
        {Object.keys(emojiDictionary).map((emoji) => (
          <span key={emoji} style={{ fontSize: '24px', margin: '5px', cursor: 'pointer' }} onClick={() => setMeaning(emojiDictionary[emoji])}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Task4;
