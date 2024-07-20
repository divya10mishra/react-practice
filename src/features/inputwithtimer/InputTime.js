//Create a widget: Given a date input find amount of time passed,
// output the following string [just now, a few secs ago, a minute ago, n mins ago
// … n months ago, n years ago], make it update and output the updated value.

import React, { useState, useEffect } from "react";

const InputTime = () => {
  const [input, setInput] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [text, setText] = useState("");
  const [modifiedDate, setModifiedDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      let currentTime = date.toLocaleTimeString();
      setCurrentState(currentTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const logTime = (e) => {
    const date = new Date();
    let currentTime = date.toLocaleTimeString();
    setModifiedDate(currentTime);
    setInput(e.target.value);
  };

  console.log(modifiedDate, "ModifiedDate");

  const formattedTime = (prev, curr) => {
    function to24Format(time) {
      let [hour, minute, secondPart] = time.split(":");
      let [second, period] = secondPart.split(" ");

      hour = parseInt(hour);
      minute = parseInt(minute);
      second = parseInt(second);
      if (period === "PM" && hour !== 12) {
        hour += 12;
      } else if (period === "AM" && hour === 12) {
        hour = 0;
      }
      console.log(hour, minute, second);
      return [hour, minute, second];
    }
    prev = to24Format(prev);
    curr = to24Format(curr);

    let [prevHour, prevMinute, prevSecond] = prev;
    let [currHour, currMinute, currSecond] = curr;
    let [diffHour, diffMinute, diffSecond] = [
      currHour - prevHour,
      currMinute - prevMinute,
      currSecond - prevSecond,
    ];

    if (diffSecond < 0) {
      diffSecond += 60;
      diffMinute -= 1;
    } else if (diffMinute < 0) {
      diffMinute += 60;
      diffSecond -= 1;
    }
    console.log(diffHour, diffMinute, diffSecond, "hi");
    if (diffHour == 0 && diffMinute == 0 && diffSecond < 5) {
      setText("just now..");
    } else if (diffHour == 0 && diffMinute == 0 && diffSecond > 5) {
      setText(`updated ${diffSecond} seconds before..`);
    } else if (diffHour === 0 && diffMinute > 0) {
      setText(`updated ${diffMinute} Minutes before..`);
    } else if (diffHour > 0) {
      setText(`updated ${diffHour}Hour before..`);
    }
  };

  useEffect(() => {
    console.log(currentState, "currentState");
    if (input) {
      formattedTime(modifiedDate, currentState);
    }
  }, [input, currentState]);

  return (
    <>
      <input
        value={input}
        onChange={(e) => logTime(e)}
        placeholder="Enter user name"
      />

      <div>{text}</div>
    </>
  );
};

export default InputTime;
