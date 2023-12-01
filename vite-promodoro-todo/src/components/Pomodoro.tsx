import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TimerButtons from "./Buttons";

const PomodoroTimer: React.FC = () => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [amount, setAmount] = useState(min);
  const [start, setStart] = useState(false);
  const [progress, setProgress] = useState(1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  useEffect(() => {
    let x = sec,
      y = min;

    const interval = setInterval(() => {
      if ((x == 0 && y == 0) || start == false) {
        document.title = `pomodoro timer`;
        setStart(false);
        return;
      }
      if (start === true) {
        document.title = `timer (${y < 10 ? `0${y}` : y}:${
          x < 10 ? `0${x}` : x
        })`;
        if (x < 1) {
          setSec(59);
          setMin(y - 1);
        } else if (x < 60) {
          --x;
          setSec(x);
        }
        setProgress((y + x / 60) / amount);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [min, sec, start, progress]);
  return (
    <main className="PomodoroTimer">
      <TimerButtons
        setAmount={setAmount}
        setSec={setSec}
        setMin={setMin}
        setProgress={setProgress}
        shortBreak={shortBreak}
        longBreak={longBreak}
      />
      <section className="clock__container">
        <button
          className="btn start"
          onClick={() => {
            setStart(!start);
          }}
        >
          {start ? "pause" : "start"}
        </button>

        <CircularProgressbar
          value={progress}
          text={
            (min < 10 ? `0${min}` : min) + ":" + (sec < 10 ? `0${sec}` : sec)
          }
        />
      </section>
    </main>
  );
};

export default PomodoroTimer;
