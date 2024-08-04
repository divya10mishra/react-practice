import React, { Dispatch, SetStateAction, useState } from "react";

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

type fileProps = {
  explorerData: dataStructure;
  setExplorerData: Dispatch<SetStateAction<dataStructure>>;
};

function FileChild({ explorerData, setExplorerData }: fileProps) {
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState<"file" | "folder" | "">("");

  const handleAdd = (currentId: string) => {
    if (flag === "file") {
      const addFile: File = {
        id: Date.now().toString(),
        fileName: inputValue,
      };
      const updatedData = { ...explorerData };
      let currentFolder = updatedData.folder;
      while (currentFolder && currentFolder.id !== currentId) {
        currentFolder = currentFolder.folder;
      }
      if (currentFolder) {
        currentFolder.file = addFile;
      }
      setExplorerData(updatedData);
      console.log(currentId, explorerData, "here");
    }
    if (flag === "folder") {
      const addFolder: Folder = {
        id: Date.now().toString(),
        folderName: inputValue,
      };
      const updatedData = { ...explorerData };
      let currentFolder = updatedData.folder;
      while (currentFolder && currentFolder.id !== currentId) {
        currentFolder = currentFolder.folder;
      }
      if (currentFolder) {
        currentFolder.folder = addFolder;
      }
      setExplorerData(updatedData);
      console.log(currentId, explorerData, "here");
    }
  };

  return (
    <div
      style={{
        margin: "2%",
      }}
    >
      {explorerData.folder ? (
        <div key={explorerData.folder?.id}>
          <span>{explorerData.folder?.folderName}</span>
          <button type="button" onClick={() => setFlag("file")}>
            📄
          </button>
          <button type="button" onClick={() => setFlag("folder")}>
            📁
          </button>
          <div>
            {flag !== "" && (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => handleAdd(explorerData.folder!.id)}>
                  Add
                </button>
              </>
            )}
            {/* {flag == "folder" && (
              <input
                type="text"
                value="inputValue"
                onChange={(e) => setInputValue(e.target.value)}
              />
            )} */}
          </div>
          {explorerData.folder?.hasOwnProperty("file") ||
          explorerData.folder?.hasOwnProperty("folder") ? (
            <div style={{ margin: "2%" }}>
              <FileChild
                explorerData={explorerData.folder}
                setExplorerData={setExplorerData}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <span>{explorerData.file?.fileName}</span>
      )}
    </div>
  );
}

export default FileChild;
