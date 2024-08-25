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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Registration = () => {
    const [RegDetails, setRegDetails] = (0, react_1.useState)({
        username: "",
        password: "",
        email: "",
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            let response = yield fetch("http://localhost:5000/registration", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ RegDetails }),
            });
            let result = yield response.json();
            console.log(result, "res in reg");
        }
        catch (err) {
            console.error(err);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: (e) => handleSubmit(e), children: ["Name:", " ", (0, jsx_runtime_1.jsx)("input", { value: RegDetails.username, onChange: (e) => setRegDetails(Object.assign(Object.assign({}, RegDetails), { username: e.target.value })) }), "Password:", " ", (0, jsx_runtime_1.jsx)("input", { value: RegDetails.password, onChange: (e) => setRegDetails(Object.assign(Object.assign({}, RegDetails), { password: e.target.value })) }), "Email:", " ", (0, jsx_runtime_1.jsx)("input", { value: RegDetails.email, onChange: (e) => setRegDetails(Object.assign(Object.assign({}, RegDetails), { email: e.target.value })) }), (0, jsx_runtime_1.jsx)("button", { children: "Submit" })] }));
};
exports.default = Registration;
