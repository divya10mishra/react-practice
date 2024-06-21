import React,{memo} from "react";

const Kids = ({ id, name, changeValue }) => {
  return (
    <div>
      <div>Name:</div>
      <input value={name} onChange={(e) => changeValue(id,e.target.value)} />
    </div>
  );
};

export default Kids;
