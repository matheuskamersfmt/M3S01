import { useState, useEffect } from 'react';

const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(10);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleStart = () => {
    setTime(inputMinutes * 60);
    setIsRunning(true);
  };

  const handleReset = () => {
    setTime(inputMinutes * 60);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>{formatTime(time)}</h2>
      
      {!isRunning && (
        <div>
          <input
            type="number"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            min="1"
            placeholder="Minutos"
          />
          <button onClick={handleStart}>Iniciar</button>
        </div>
      )}
      
      {isRunning && <button onClick={handleReset}>Reiniciar</button>}
    </div>
  );
};

export default Timer;