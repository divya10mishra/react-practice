import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(5);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setSeconds((sec) => sec - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      stopTimer();
      setSeconds(5);
      resumeTimer();
    }
  }, [seconds]);

  const stopTimer = () => {
    setTimerRunning(false);
  };
  const resumeTimer = () => {
    setTimerRunning(true);
  };

  return (
    <div>
      {seconds}
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resumeTimer}>Resume</button>
    </div>
  );
}

export default Timer;
