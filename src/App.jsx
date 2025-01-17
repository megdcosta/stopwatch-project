import React, { useState, useRef } from 'react';
import './App.css'; // Ensure you're importing the styles

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <h2>{time}s</h2>
      <button className="start" onClick={startTimer} disabled={isRunning}>Start</button>
      <button className="stop" onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button className="reset" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
