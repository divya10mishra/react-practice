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
const Login = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        username: "",
        password: "",
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            let response = yield fetch(`http://localhost:5000/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                console.log(response, "Res");
            }
            let data = yield response.json();
            console.log(data, "data");
        }
        catch (error) {
            console.error(error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: (e) => handleSubmit(e), children: ["username:", " ", (0, jsx_runtime_1.jsx)("input", { value: formData.username, onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { username: e.target.value })) }), "password:", " ", (0, jsx_runtime_1.jsx)("input", { value: formData.password, onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { password: e.target.value })) }), (0, jsx_runtime_1.jsx)("button", { children: "Submit" })] }));
};
exports.default = Login;
