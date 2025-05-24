import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

function App() {
  return (
    <div>
      <h1>React Basics Tasks</h1>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task9 />
      <Task10 name="Sasikala" />
      <Task11 />
      <Task12 />
      <Task13 />

      <h1>Mini Projects</h1>
      <Project1 name="Sasikala Thennarasu" age={33} bio="A passionate Web Designer." />
      <Project2 name="Sasikala" />
      <Project3 />
      <Project4 hobbies={["Drawing", "Cycling", "Gardening"]} />
    </div>
  );
}
export default App;
