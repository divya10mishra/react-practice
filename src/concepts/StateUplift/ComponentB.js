import React,{useState} from 'react'

function ComponentB({updateDetails}) {
    const [newname,setNewname] = useState('')
    const [newemail, setNewemail] = useState('')
    const [newphone, setNewphone] = useState('')
  return (
    <div>
    name: <input value = {newname} onChange={(e)=>setNewname(e.target.value)}/>
    email: <input value = {newemail} onChange={(e)=>setNewemail(e.target.value)}/>
    phone: <input value={newphone} onChange={(e)=>setNewphone(e.target.value)}/>
    <button onClick={()=>updateDetails(newname,newemail,newphone)}>Submit</button>
    </div>
  )
}

export default ComponentB