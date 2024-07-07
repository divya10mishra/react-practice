import React, { useContext } from "react";
import dataContext from "../../context/context";

function Form2() {
  const { payload, setPayload } = useContext(dataContext);

  return (
    <>
      <div> Parent's Details</div>
      <input
        placeholder="father's name"
        value={payload.fatherName}
        onChange={(e) => {
          setPayload({ ...payload, fatherName: e.target.value });
        }}
      />
      <input
        placeholder="mother's  name"
        value={payload.motherName}
        onChange={(e) => {
          setPayload({ ...payload, motherName: e.target.value });
        }}
      />
      <input
        placeholder="email"
        value={payload.email}
        onChange={(e) => {
          setPayload({ ...payload, email: e.target.value });
        }}
      />
    </>
  );
}

export default Form2;
