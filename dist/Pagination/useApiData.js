"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const UseApiData = () => {
    const [apiData, setApiData] = (0, react_1.useState)([]);
    const [pageLimit, setPageLimit] = (0, react_1.useState)(10);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            const fetched = yield fetch(`https://dummyjson.com/products?limit=${pageLimit}`);
            const result = yield fetched.json();
            setApiData(result.products);
        });
        fetchData();
    }, [pageLimit]);
    return { apiData, pageLimit, setPageLimit };
};
exports.default = UseApiData;
