import React from "react";

function Child({name, active, handleToggle}) {
   
  return (
    <div style={{ width: "50%", border: "2px solid black", marginTop: "2px" }}>
      <div
        data-name={name}
        style={{ border: "1px solid black" }}
        onClick={(event)=>handleToggle(event.target.getAttribute('data-name'))}
      >
        title
      </div>
      {active.name==name && active.toggle ? (
        <div style={{ display: "block" }}>content hidden</div>
      ) : (
        <div style={{ display: "none" }}>content block</div>
      )}
    </div>
  );
}

export default Child;
