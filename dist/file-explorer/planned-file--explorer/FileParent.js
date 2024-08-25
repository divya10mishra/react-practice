"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const data_1 = __importDefault(require("./data"));
const FileChild_1 = __importDefault(require("./FileChild"));
function FileParent() {
    const [fileStructure, setFileStructure] = (0, react_1.useState)(data_1.default);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(FileChild_1.default, { fileStructure: fileStructure, setFileStructure: setFileStructure }) }));
}
exports.default = FileParent;
