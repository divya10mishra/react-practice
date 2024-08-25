"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useApiData_1 = __importDefault(require("./useApiData"));
const Page = () => {
    const [page, setPage] = (0, react_1.useState)(1);
    const { apiData, setPageLimit } = (0, useApiData_1.default)();
    (0, react_1.useEffect)(() => {
        setPageLimit(100);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [apiData.slice(page * 10 - 10, page * 10).map((item) => ((0, jsx_runtime_1.jsxs)("div", { children: [item.id, (0, jsx_runtime_1.jsx)("img", { src: item.images, height: 100, width: 100 }), item.title] }))), (0, jsx_runtime_1.jsxs)("div", { style: {
                    width: "100%",
                    padding: "1%",
                    margin: "1%",
                    display: "flex",
                    justifyContent: "center",
                }, children: [(0, jsx_runtime_1.jsx)("span", { children: "\u2B05\uFE0F" }), Array.from({ length: 10 }).map((_, index) => ((0, jsx_runtime_1.jsx)("span", { style: { padding: "1%", margin: "1%", cursor: "pointer" }, onClick: () => setPage(index + 1), children: index + 1 }))), (0, jsx_runtime_1.jsx)("span", { children: "\u27A1\uFE0F" })] })] }));
};
exports.default = Page;
