import React, { useState, useEffect } from "react";

function Timer({ masterFlag }) {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(true);
  let runningTimer;

  useEffect(() => {
    if (!masterFlag) {
      stopTimer()
    } else {
      setActive(true);
    }
  }, [masterFlag]);

  useEffect(() => {
    if (active) {
      runningTimer = setInterval(() => {
        setSeconds((sec) => sec + 1);
      }, 1000);
    }
    return () => {
      clearInterval(runningTimer);
    };
  }, [active]);

  const restartTimer = () => {
    setSeconds(0);
    setActive(true);
  };
  const resumeTimer = () => {
    setActive(true);
  };
  const stopTimer = () => {
    clearInterval(runningTimer);
    setActive(false);
  };

  return (
    <div
      style={{
        border: "2px solid black",

        margin: "10px",
        height: "10vh",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{seconds}</div>
      <div>
        <button onClick={restartTimer}>Restart</button>{" "}
        <button onClick={resumeTimer}>Resume</button>{" "}
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
