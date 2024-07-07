import React, { useState, useContext } from "react";
import dataContext from "../../context/context";

function Form1() {
  const { payload, setPayload } = useContext(dataContext);
  return (
    <>
      <div> Student's Details</div>
      <input
        placeholder="student first name"
        value={payload.fname}
        onChange={(e) => setPayload({ ...payload, fname: e.target.value })}
      />
      <input
        placeholder="student last name"
        value={payload.lname}
        onChange={(e) => {
          setPayload({ ...payload, lname: e.target.value });
        }}
      />
    </>
  );
}

export default Form1;
