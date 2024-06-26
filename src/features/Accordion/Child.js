import React from "react";

function Child({ name, toggle, handleToggle }) {
   
  return (
    <div style={{ border: "2px solid black" }}>
      <div
        data-name={name}
        onClick={(e) => handleToggle(e.target.getAttribute("data-name"))}
        style={{ border: "2px solid black", marginTop: "5px" }}
      >
        title
      </div>
      {toggle.isOpen && toggle.activeAccordion === name ? (
        <div style={{ display: "block" }}>content</div>
      ) : (
        <div style={{ display: "none" }}>content</div>
      )}
    </div>
  );
}

export default Child;
