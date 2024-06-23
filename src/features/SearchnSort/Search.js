import React,{useState} from "react";

function Search({inputValue, searchData, column}) {
    
  return (
    <div>
      <input
        style={{ padding: "5px", margin:'10px', width: "25%" }}
        placeholder={`${column}`}
        value={inputValue}
        onChange={(e)=>searchData(e.target.value, column)}
      />
    </div>
  );
}

export default Search;
