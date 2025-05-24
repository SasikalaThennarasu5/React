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

import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Task1</h2> <Task1 message="Hello, Props!" />
      <h2>Task2</h2> <Task2 name="John" age={25} />
      <h2>Task3</h2> <Task3 name="Alice" city="Paris" />
      <h2>Task4</h2> <Task4 isStudent={true} />
      <h2>Task5</h2> <Task5 />
      <h2>Task6</h2> <Task6 hobbies={['Reading', 'Coding', 'Music']} />
      <h2>Task7</h2> <Task7 user={{ name: "Mike", email: "mike@example.com", phone: "1234567890" }} />
      <h2>Task8</h2> <Task8 name="Sam" />
      <h2>Task9</h2> <Task9 text="Styled Text" color="green" />
      <h2>Task10</h2> <Task10 onClick={() => alert("Button Clicked!")} />
      <h2>Task11</h2> <Task11 title="Card Title" description="This is a reusable card." />
      <h2>Task12</h2> <Task12 />
      <h2>Task13</h2> <Task13 age={30} city="Tokyo" />

      <h2>Mini Project 1</h2> <Project1 name="Nina" age={22} city="Berlin" />
      <h2>Mini Project 2</h2> <Project2 tasks={["Eat", "Code", "Sleep"]} />
      <h2>Mini Project 3</h2> <Project3 text="Colorful World" color="blue" />
      <h2>Mini Project 4</h2> <Project4 onClick={() => console.log("Handled in App")} />
    </div>
  );
}

export default App;
