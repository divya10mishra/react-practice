import React, { useState } from "react";

interface LoginFormDetails {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormDetails>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.log(response, "Res");
      }
      let data = await response.json();
      console.log(data, "data");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      username:{" "}
      <input
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      ></input>
      password:{" "}
      <input
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Login;
