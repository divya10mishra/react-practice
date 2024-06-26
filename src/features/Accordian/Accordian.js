import React,{useState} from 'react'
import Child from './Child'

function Accordion() {
    const [active,setActive] = useState({ name:'' , toggle: false})

    const handleToggle = (name) => {
        if(active.name===name){
            setActive({...active, toggle:!active.toggle})
        }else{
            setActive({name, toggle:true})
        }
    }

    console.log(active, "Active")

  return (
    <div>
       <Child name={"accordion1"} active={active} handleToggle={handleToggle}/>
       <Child name={"accordion2"}  active={active} handleToggle={handleToggle}/>
       <Child name={"accordion3"}  active={active} handleToggle={handleToggle}/>
    </div>
  )
}

export default Accordion