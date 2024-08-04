import React, { useState } from "react";
import FileChild from "./FileChild";

interface Folder {
  id: string;
  folderName: string;
  folder?: Folder;
  file?: File;
}
interface File {
  id: string;
  fileName: string;
}
type dataStructure = {
  id: string;
  file?: File;
  folder?: Folder;
};

function FileIndex() {
  let ds: dataStructure = {
    id: "1",
    folder: {
      id: "3",
      folderName: "hello",
      file: {
        id: "2",
        fileName: "hi",
      },
      folder: {
        id: "5",
        folderName: "divya",
        folder: {
          id: "4",
          folderName: "sakhi",
        },
      },
    },
  };
  const [explorerData, setExplorerData] = useState(ds);
  return (
    <>
      <FileChild
        explorerData={explorerData}
        setExplorerData={setExplorerData}
      />
    </>
  );
}

export default FileIndex;
