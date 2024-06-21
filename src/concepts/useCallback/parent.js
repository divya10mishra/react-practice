import React, { useCallback, useState } from "react";
import Kids from "./child";

const Parent = () => {
  const [child, setChild] = useState([
    { id: "1", value: "" },
    { id: "2", value: "" },
    { id: "3", value: "" },
  ]);

  const changeValue = (id, args) => {
    setChild((prevItem) =>
      prevItem.map((item) => {
        if (item.id == id) {
          item.value = args;
        }
        return item;
      })
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <div>List of kids:</div>
      {JSON.stringify(child)}
      <div>
        {child.map((child) => (
          <Kids
            name={child.name}
            id={child.id}
            key={child.id}
            changeValue={changeValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;
