import React,{useRef} from 'react'

function UseRef() {
    const color = useRef('')
    const changeColor = () => {
        color.current.style.background = 'blue'
    }
    
  return (
    <div>
        <div style={{height:'50px', width:'50px'}} ref={color}></div>
        <button onClick={changeColor}>Click Me!</button>
    </div>
  )
}

export default UseRef