import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
