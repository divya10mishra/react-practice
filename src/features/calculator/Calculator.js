import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, multiply } from "./CalculatorSlice";

function Calculator() {
  const [input, setInput] = useState({ input1: "", input2: "" });

  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);
  return (
    <div>
      input1:
      <input
        value={input.input1}
        onChange={(e) => setInput({ ...input, input1: e.target.value })}
      />
      input2:
      <input
        value={input.input2}
        onChange={(e) => setInput({ ...input, input2: e.target.value })}
      />
      <button
        onClick={() =>
          dispatch(add({ input1: input.input1, input2: input.input2 }))
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch(sub({ input1: input.input1, input2: input.input2 }))
        }
      >
        Subtract
      </button>
      <button
        onClick={() =>
          dispatch(multiply({ input1: input.input1, input2: input.input2 }))
        }
      >
        Multiply
      </button>
      <div>Result:{result}</div>
    </div>
  );
}

export default Calculator;
