import React, { useState } from "react";
import Timer from "./Timer";

function ParentTimer() {
  const [timerCount, setTimerCount] = useState(1);
  const [masterFlag, seMasterFlag] = useState(true);

  const addTimer = () => {
    setTimerCount((count) => count + 1);
  };
  const removeTimer = () => {
    setTimerCount((count) => count - 1);
  };
  const stopAll = () => {
    seMasterFlag(false);
  };
  const resumeAll = () => {
    seMasterFlag(true);
  };
  return (
    <div>
      <button onClick={addTimer}>Add Timer</button>
      <button onClick={removeTimer}>Remove Timer</button>
      <button onClick={stopAll}>Stop All</button>
      <button onClick={resumeAll}>Resume All</button>
      {Array.from({ length: timerCount }).fill(
        <Timer masterFlag={masterFlag} />
      )}
    </div>
  );
}

export default ParentTimer;
