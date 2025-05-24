import './App.css';


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
import MiniProject1 from './components/Project1';
import MiniProject2 from './components/Project2';
import MiniProject3 from './components/Project3';
import MiniProject4 from './components/Project4';

function App() {
  return (
    <div className="app-container">
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 />
      <Task12 />
      <Task13 />
      <MiniProject1/>
      <MiniProject2/>
       <MiniProject3/>
      <MiniProject4 
        src="/Images/Avatar.avif" 
        alt="User Avatar - Jane Doe" 
      />
    </div>
  );
}

export default App;