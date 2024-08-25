"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function FileChild({ fileStructure, setFileStructure }) {
    const [show, setShow] = (0, react_1.useState)(false);
    const [input, setInput] = (0, react_1.useState)("");
    const [inputShow, setInputShow] = (0, react_1.useState)({
        isVisible: false,
        isFolder: false,
    });
    //    const {insertNode} = useTraverseNode()
    const add = (input, currentId, isFolder) => {
        let newNode = {
            id: Date.now().toString(),
            name: input,
            isFolder: isFolder,
            items: [],
        };
        if (fileStructure.id === currentId) {
            fileStructure.items.unshift(newNode);
        }
        setInputShow(Object.assign(Object.assign({}, inputShow), { isVisible: false }));
    };
    const addFolder = (e, isFolder) => {
        e.stopPropagation();
        setInputShow({ isVisible: true, isFolder: isFolder });
    };
    const addFile = (e, isFolder) => {
        e.stopPropagation();
        setInputShow({ isVisible: true, isFolder: isFolder });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [fileStructure.isFolder ? ((0, jsx_runtime_1.jsxs)("div", { style: { margin: "5px" }, onClick: () => setShow(!show), children: ["\uD83D\uDCC1", fileStructure.name, " ", (0, jsx_runtime_1.jsx)("button", { onClick: (e) => addFolder(e, true), children: "+Folder" }), (0, jsx_runtime_1.jsx)("button", { onClick: (e) => addFile(e, false), children: "+File" })] }, fileStructure.id)) : ((0, jsx_runtime_1.jsxs)("div", { style: { margin: "5px" }, onClick: () => setShow(!show), children: ["\uD83D\uDCC4", fileStructure.name, " "] }, fileStructure.id)), inputShow.isVisible && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [inputShow.isFolder ? (0, jsx_runtime_1.jsx)("span", { children: "\uD83D\uDCC1" }) : (0, jsx_runtime_1.jsx)("span", { children: "\uD83D\uDCC4" }), (0, jsx_runtime_1.jsx)("input", { value: input, type: "text", onBlur: () => setInputShow(Object.assign(Object.assign({}, inputShow), { isVisible: true })), onChange: (e) => setInput(e.target.value) }), " ", (0, jsx_runtime_1.jsx)("button", { onClick: () => add(input, fileStructure.id, inputShow.isFolder), children: "Add" })] })), show && ((0, jsx_runtime_1.jsx)("div", { style: { marginLeft: "20px" }, children: fileStructure.isFolder ? (fileStructure.items.map((item) => ((0, jsx_runtime_1.jsx)(FileChild, { fileStructure: item, setFileStructure: setFileStructure }, fileStructure.id)))) : ((0, jsx_runtime_1.jsxs)("div", { children: ["\uD83D\uDCC4", fileStructure.name] }, fileStructure.id)) }))] }));
}
exports.default = FileChild;
