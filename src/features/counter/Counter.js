import { useState } from "react";

const Counter = () => {
  // const [initials,setInitials] = useState()
  const [counts, setCounts] = useState(Array(5).fill(0));
 
  const counter = (index,type) => {
    const arr = [...counts]
    if(type==='+'){
        arr[index]+=1
    }else if(type==='-'){
        arr[index]-=1
    }
    setCounts([...arr])
  }
  return (
    <>
      {counts?.map((count, index) => {
        return (
          <div key={index}>
            <span >{index+1}</span>
            <button onClick={() => counter(index,'+')}>+</button>
            <button onClick={() => counter(index,'-')}>-</button>
            <span>{count}</span>
          </div>
        );
      })}
    </>
  );
};

export default Counter;
