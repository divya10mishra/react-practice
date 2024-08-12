import React, { SetStateAction, Dispatch, useState } from "react";
import useTraverseNode from "./useTraverseTree";

interface dataStructure {
  id: string;
  name: string;
  isFolder: boolean;
  items: dataStructure[];
}
type props = {
  fileStructure: dataStructure;
  setFileStructure: Dispatch<SetStateAction<dataStructure>>;
};
function FileChild({ fileStructure, setFileStructure }: props) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [inputShow, setInputShow] = useState({
    isVisible: false,
    isFolder: false,
  });
  //    const {insertNode} = useTraverseNode()
  const add = (input: string, currentId: string, isFolder: boolean) => {
    let newNode = {
      id: Date.now().toString(),
      name: input,
      isFolder: isFolder,
      items: [],
    };

    if (fileStructure.id === currentId) {
      fileStructure.items.unshift(newNode);
    }
    setInputShow({ ...inputShow, isVisible: false });
  };

  const addFolder = (e: any, isFolder: boolean) => {
    e.stopPropagation();
    setInputShow({ isVisible: true, isFolder: isFolder });
  };

  const addFile = (e: any, isFolder: boolean) => {
    e.stopPropagation();
    setInputShow({ isVisible: true, isFolder: isFolder });
  };

  return (
    <div>
      {fileStructure.isFolder ? (
        <div
          style={{ margin: "5px" }}
          onClick={() => setShow(!show)}
          key={fileStructure.id}
        >
          📁{fileStructure.name}{" "}
          <button onClick={(e) => addFolder(e, true)}>+Folder</button>
          <button onClick={(e) => addFile(e, false)}>+File</button>
        </div>
      ) : (
        <div
          style={{ margin: "5px" }}
          onClick={() => setShow(!show)}
          key={fileStructure.id}
        >
          📄{fileStructure.name}{" "}
        </div>
      )}

      {inputShow.isVisible && (
        <>
          {inputShow.isFolder ? <span>📁</span> : <span>📄</span>}
          <input
            value={input}
            type="text"
            onBlur={() => setInputShow({ ...inputShow, isVisible: true })}
            onChange={(e) => setInput(e.target.value)}
          />{" "}
          <button
            onClick={() => add(input, fileStructure.id, inputShow.isFolder)}
          >
            Add
          </button>
        </>
      )}

      {show && (
        <div style={{ marginLeft: "20px" }}>
          {fileStructure.isFolder ? (
            fileStructure.items.map((item) => (
              <FileChild
                key={fileStructure.id}
                fileStructure={item}
                setFileStructure={setFileStructure}
              />
            ))
          ) : (
            <div key={fileStructure.id}>📄{fileStructure.name}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default FileChild;
