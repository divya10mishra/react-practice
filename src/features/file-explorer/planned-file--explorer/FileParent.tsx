import React, { useState } from "react";
import explorer from "./data";
import FileChild from "./FileChild";

interface dataStructure {
  id: string;
  name: string;
  isFolder: boolean;
  items: dataStructure[];
}
function FileParent() {
  const [fileStructure, setFileStructure] = useState<dataStructure>(explorer);

  return (
    <div>
      <FileChild
        fileStructure={fileStructure}
        setFileStructure={setFileStructure}
      />
    </div>
  );
}

export default FileParent;
