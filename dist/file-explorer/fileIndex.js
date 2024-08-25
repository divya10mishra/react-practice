"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FileChild_1 = __importDefault(require("./FileChild"));
function FileIndex() {
    // let ds: dataStructure = {
    //   id: "1",
    //   folder: {
    //     id: "3",
    //     folderName: "hello",
    //     file: {
    //       id: "2",
    //       fileName: "hi",
    //     },
    //     folder: {
    //       id: "5",
    //       folderName: "divya",
    //       folder: {
    //         id: "4",
    //         folderName: "sakhi",
    //       },
    //     },
    //   },
    // };
    const [explorerData, setExplorerData] = (0, react_1.useState)({
        id: "1",
        folder: { id: "2", folderName: "" },
        file: { id: "3", fileName: "" },
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FileChild_1.default, { explorerData: explorerData, setExplorerData: setExplorerData }) }));
}
exports.default = FileIndex;
