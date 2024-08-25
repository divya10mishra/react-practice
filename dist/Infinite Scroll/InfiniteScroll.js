"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useApiData_1 = __importDefault(require("../Pagination/useApiData"));
function InfiniteScroll() {
    const { apiData, pageLimit, setPageLimit } = (0, useApiData_1.default)();
    (0, react_1.useEffect)(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [pageLimit]);
    const handleInfiniteScroll = () => {
        let offsetHeight = window.document.body.offsetHeight;
        let scrollTop = document.documentElement.scrollTop;
        let innerHeight = window.innerHeight;
        if (scrollTop + innerHeight >= offsetHeight) {
            setPageLimit(() => pageLimit + 10);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [apiData.map((item, index) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { children: [item.id, (0, jsx_runtime_1.jsx)("img", { src: item.images, height: 150, width: 150 }), (0, jsx_runtime_1.jsx)("div", { children: item.title })] }, index) }))), (0, jsx_runtime_1.jsx)("h1", { children: "Loading.... " })] }));
}
exports.default = InfiniteScroll;
