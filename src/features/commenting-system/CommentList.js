import React from 'react'

function SubComment({name, comment, flag}) {
  return (
    <div>
    {flag && (
        <div>
          <div>{name}</div>
          <div>{comment}</div>
        </div>
    
      )}
    </div>
  )
}

export default SubComment