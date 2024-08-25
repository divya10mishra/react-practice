"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const data_1 = __importDefault(require("./data"));
const ChildComment_1 = __importDefault(require("./ChildComment"));
const CommentSystem = () => {
    const [commentData, setCommentData] = (0, react_1.useState)(data_1.default);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ChildComment_1.default, { commentData: commentData, setCommentData: setCommentData }) }));
};
exports.default = CommentSystem;
