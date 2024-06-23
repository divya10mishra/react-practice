import React, { useState } from 'react'
import Child from './Child'

function Accordion() {
  const [toggle, setToggle] = useState({activeAccordion:'', isOpen:false})

  const handleToggle=(name)=>{
    
    if(toggle.active === name){
      setToggle({...toggle, toggle:!toggle.isOpen})
    }else{
      setToggle({activeAccordion:name, isOpen:true})
    } 
  }

  
  return (
    <div>
      <Child name={"acc1"} toggle={toggle} handleToggle={handleToggle}/>
      <Child name={"acc2"} toggle={toggle} handleToggle={handleToggle}/>
      <Child name={"acc3"} toggle={toggle} handleToggle={handleToggle}/>
    </div>
  )
}

export default Accordion