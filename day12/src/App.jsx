import React from 'react';

// Import all tasks and projects
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

// Import context providers
import { MyProvider } from './contexts/MyContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { CounterProvider } from './contexts/CounterContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UserDataProvider } from './contexts/UserDataContext';

const App = () => {
  return (
    <MyProvider>
      <ThemeProvider>
        <AuthProvider>
          <CounterProvider>
            <LanguageProvider>
              <UserDataProvider>
                <div style={{ padding: "20px", fontFamily: "Arial" }}>
                  <h1>React Context API Tasks & Mini Projects</h1>
                  
                  {/* Tasks */}
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
                  
                  <hr />

                  {/* Mini Projects */}
                  <Project1 />
                  <Project2 />
                  <Project3 />
                  <Project4 />
                </div>
              </UserDataProvider>
            </LanguageProvider>
          </CounterProvider>
        </AuthProvider>
      </ThemeProvider>
    </MyProvider>
  );
};

export default App;
