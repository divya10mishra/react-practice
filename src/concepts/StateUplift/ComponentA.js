import React, { useState } from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

function ComponentA() {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const updateDetails = (name,email,phone) => {
       setName(name)
       setEmail(email)
       setPhone(phone)
    }
  return (
    <>
      <ComponentB updateDetails={updateDetails}/>
      <ComponentC name={name} email={email} phone={phone}/>
    </>
  )
}

export default ComponentA