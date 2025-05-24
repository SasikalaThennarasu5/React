
import './App.css'
import StudentList from './components/Project1'
import TaskManager from './components/Project2'
import TimeGreeting from './components/Project3'
import EvenStyledList from './components/Project4'
import ListRenderingIntro from './components/Task1'
import GreetingByTime from './components/Task10'
import ClickableList from './components/Task11'
import ToggleList from './components/Task12'
import EvenNumberList from './components/Task13'
import NumberList from './components/Task2'
import NameList from './components/Task3'
import UserList from './components/Task4'
import FruitList from './components/Task5'
import GreetIfLoggedIn from './components/Task6'
import TernaryGreeting from './components/Task7'
import TaskList from './components/Task8'
import EmptyListCheck from './components/Task9'

function App() {
  

  return (
  
       <div style={{ padding: "20px" }}>
        <h2>Task1:</h2>
      <ListRenderingIntro />
      <h2>Task2:</h2>
      <NumberList />
      <h2>Task3:</h2>
      <NameList />
      <h2>Task3:</h2>
      <UserList />
      <h2>Task5:</h2>
      <FruitList />
      <h2>Task6:</h2>
      <GreetIfLoggedIn isLoggedIn={true} />
      <h2>Task7:</h2>
      <TernaryGreeting isLoggedIn={false} />
      <h2>Task8:</h2>
      <TaskList />
      <h2>Task9:</h2>
      <EmptyListCheck items={[]} />
      <h2>Task10:</h2>
      <GreetingByTime time={14} />
      <h2>Task11:</h2>
      <ClickableList />
      <h2>Task12:</h2>
      <ToggleList />
      <h2>Task13:</h2>
      <EvenNumberList />
     

      <h2>Mini Project1:</h2>

      <StudentList />
      <h2>Miniproject2:</h2>
      <TaskManager />
      <h2>Miniproject3:</h2>
      <TimeGreeting />
      <h2>Miniproject4:</h2>
      <EvenStyledList />
    </div>

    
  )
}

export default App