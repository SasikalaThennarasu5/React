import React, { useState } from 'react';

const Task2 = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div className="task">
      <h2>Task2: Tabs Component</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('Tab1')}>Tab 1</button>
        <button onClick={() => setActiveTab('Tab2')}>Tab 2</button>
        <button onClick={() => setActiveTab('Tab3')}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 'Tab1' && <p>This is content of Tab 1</p>}
        {activeTab === 'Tab2' && <p>This is content of Tab 2</p>}
        {activeTab === 'Tab3' && <p>This is content of Tab 3</p>}
      </div>
    </div>
  );
};

export default Task2;
