"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function FileChild({ explorerData, setExplorerData }) {
    var _a, _b, _c, _d, _e;
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [flag, setFlag] = (0, react_1.useState)("");
    const handleAdd = (currentId) => {
        if (flag === "file") {
            const addFile = {
                id: Date.now().toString(),
                fileName: inputValue,
            };
            const updatedData = Object.assign({}, explorerData);
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
            const addFolder = {
                id: Date.now().toString(),
                folderName: inputValue,
            };
            const updatedData = Object.assign({}, explorerData);
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
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            margin: "2%",
        }, children: explorerData.folder ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: (_a = explorerData.folder) === null || _a === void 0 ? void 0 : _a.folderName }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => setFlag("file"), children: "\uD83D\uDCC4" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => setFlag("folder"), children: "\uD83D\uDCC1" }), (0, jsx_runtime_1.jsx)("div", { children: flag !== "" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleAdd(explorerData.folder.id), children: "Add" })] })) }), ((_b = explorerData.folder) === null || _b === void 0 ? void 0 : _b.hasOwnProperty("file")) ||
                    ((_c = explorerData.folder) === null || _c === void 0 ? void 0 : _c.hasOwnProperty("folder")) ? ((0, jsx_runtime_1.jsx)("div", { style: { margin: "2%" }, children: (0, jsx_runtime_1.jsx)(FileChild, { explorerData: explorerData.folder, setExplorerData: setExplorerData }) })) : ("")] }, (_d = explorerData.folder) === null || _d === void 0 ? void 0 : _d.id)) : ((0, jsx_runtime_1.jsx)("span", { children: (_e = explorerData.file) === null || _e === void 0 ? void 0 : _e.fileName })) }));
}
exports.default = FileChild;
