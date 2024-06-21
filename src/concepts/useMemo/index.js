import React, { useMemo, useState } from "react";

const Memoization = () => {
  const [list, setList] = useState([1,2,3,4,5])
  const [input1,setInput1] = useState(0)
  

  const addElement = () => {
    if(!list.includes(input1)){
        setList([...list, input1])
        
    }else{
        alert("Already Exists")
    }
  }

  const total = () => {
    console.log("called")
    for(let i=0;i<1000000000;i++){}
    let result = list.reduce((acc,curr)=>acc+curr,0)
    return result
  }
  const sum = useMemo(()=>total(),[list])

  return (
    <div>
     <div>{list}</div>
     <input value={input1} type="number" onChange={(e)=>setInput1(parseInt(e.target.value))} />
     <button onClick={addElement}>Add Element</button>
     <div>
     
     <span>{sum}</span>
     </div>
    </div>
  );
};

export default Memoization;
