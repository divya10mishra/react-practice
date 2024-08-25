"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function ChildComment({ commentData, setCommentData }) {
    const [showInput, setShowInput] = (0, react_1.useState)(null);
    const [input, setInput] = (0, react_1.useState)("");
    const onInputShow = (e, activeId) => {
        e.stopPropagation();
        setShowInput((prev) => (prev == activeId ? null : activeId));
    };
    const onAdd = (id) => {
        const newNode = {
            id: Date.now(),
            content: input,
            replies: [],
        };
        const updateReplies = (comments, id) => {
            return comments.map((item) => {
                if (item.id === id) {
                    return Object.assign(Object.assign({}, item), { replies: [newNode, ...item.replies] });
                }
                else {
                    return Object.assign(Object.assign({}, item), { replies: updateReplies(item.replies, id) });
                }
            });
        };
        const updateComments = updateReplies(commentData, id);
        setCommentData(updateComments);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: commentData === null || commentData === void 0 ? void 0 : commentData.map((item) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { style: { margin: "1%" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { border: "1px solid black", width: "30%" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { padding: "10px" }, children: item.content }), (0, jsx_runtime_1.jsx)("button", { onClick: (e) => onInputShow(e, item.id), children: "Reply\uD83D\uDD3A" }), (0, jsx_runtime_1.jsx)("button", { children: "Delete\u274C" })] }), showInput === item.id && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "comment", onChange: (e) => setInput(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => onAdd(item.id), children: "Add" })] })), (0, jsx_runtime_1.jsx)("div", { style: { padding: "10px" }, children: item.replies.length > 0 && ((0, jsx_runtime_1.jsx)(ChildComment, { commentData: item.replies, setCommentData: setCommentData })) })] }, item.id) }))) }));
}
exports.default = ChildComment;
