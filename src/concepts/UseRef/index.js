import React, { useRef, useState, useEffect } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const color = useRef("");
  const inputRef = useRef("");
  const countRef = useRef(0);
  const changeColor = (e) => {
    // color.current.style.background = "blue";
    inputRef.current = name;
    //clearInterval(countRef.current);
  };
  const stopTimer = () => {
    clearInterval(countRef.current);
  };

  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((item) => item + 1);
    }, 1000);
    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      {/* <div style={{ height: "50px", width: "50px" }} ref={color}></div> */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={changeColor}>Show old name</button>
      <h3>Current Name: {name} </h3>
      <h3>Previous Name: {inputRef.current}</h3>
      <div>Timer : {count}</div>

      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default UseRef;
