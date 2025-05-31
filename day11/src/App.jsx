import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';

import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React useState & useEffect Tasks</h1>

      <hr /><Task1 />
      <hr /><Task2 />
      <hr /><Task3 />
      <hr /><Task4 />
      <hr /><Task5 />
      <hr /><Task6 />
      <hr /><Task7 />
      <hr /><Task8 />
      <hr /><Task9 />
      <hr /><Task10 />
      <hr /><Task11 />
      <hr /><Task12 />
      <hr /><Task13 />

      <h1>Mini Projects</h1>

      <hr /><Project1 />
      <hr /><Project2 />
      <hr /><Project3 />
      <hr /><Project4 />
    </div>
  );
};

export default App;
