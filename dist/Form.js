"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Login = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        username: "",
        password: "",
    });
    const handleSubmit = () => {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("input", { value: formData.username, onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { username: e.target.value })) }), (0, jsx_runtime_1.jsx)("input", { value: formData.password, onChange: (e) => setFormData(Object.assign(Object.assign({}, formData), { username: e.target.value })) })] }));
};
exports.default = Login;
