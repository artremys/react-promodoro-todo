import React, { useState, useEffect } from "react";
import PomodoroTimer from "./components/Pomodoro";
import ToDo from "./components/ToDoList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="parent">
      <div className="child">
        <h1>Pomodoro </h1>
        <PomodoroTimer />
      </div>
      <div className="child">
        <h1>ToDo</h1>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
