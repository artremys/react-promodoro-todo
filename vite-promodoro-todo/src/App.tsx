import React, { useState, useEffect } from "react";
import PomodoroTimer from "./components/Pomodoro";
import ToDo from "./components/ToDoList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="PomodoroTimer">
        <h1>Pomodoro </h1>
        <PomodoroTimer />
      </div>
      <div className="ToDo">
        {" "}
        <ToDo />
      </div>{" "}
    </>
  );
}

export default App;
