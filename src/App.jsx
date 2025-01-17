import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [splits, setSplits] = useState([]);
  const timerRef = useRef(null);

  // Start or Pause Timer
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // Update every 10 milliseconds
    }
    setIsRunning(!isRunning);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setSplits([]);
    setIsRunning(false);
  };

  // Record Split
  const recordSplit = () => {
    const formattedTime = formatTime(time);
    setSplits((prevSplits) => [...prevSplits, formattedTime]);
  };

  // Format Time
  const formatTime = (milliseconds) => {
    const hours = String(Math.floor(milliseconds / 3600000)).padStart(2, '0');
    const minutes = String(
      Math.floor((milliseconds % 3600000) / 60000)
    ).padStart(2, '0');
    const seconds = String(
      Math.floor((milliseconds % 60000) / 1000)
    ).padStart(2, '0');
    const ms = String(Math.floor((milliseconds % 1000) / 100)).padStart(1, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div className="button-group">
        <button className="circular start" onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="circular split" onClick={recordSplit} disabled={!isRunning}>
          Split
        </button>
        <button className="circular reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <ul className="splits">
        {splits.map((split, index) => (
          <li key={index}>Split {index + 1}: {split}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
