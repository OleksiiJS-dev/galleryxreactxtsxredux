import React from 'react';
import './App.css';
import CounterButtons from "./components/ToDoAppComponents";

function App() {
  return (
    <div className="App">
      <h1>Приложение "Список задач" с Redux</h1>
      {/* <Counter /> */}
      <CounterButtons />
    </div>
  );
}

export default App;