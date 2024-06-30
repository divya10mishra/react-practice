import React, { useState } from "react";

type RegistrationDetails = {
  username: string;
  password: string;
  email: string;
};
const Registration: React.FC = () => {
  const [RegDetails, setRegDetails] = useState<RegistrationDetails>({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ RegDetails }),
      });
      let result = await response.json();
      console.log(result, "res in reg");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Name:{" "}
      <input
        value={RegDetails.username}
        onChange={(e) =>
          setRegDetails({ ...RegDetails, username: e.target.value })
        }
      />
      Password:{" "}
      <input
        value={RegDetails.password}
        onChange={(e) =>
          setRegDetails({ ...RegDetails, password: e.target.value })
        }
      />
      Email:{" "}
      <input
        value={RegDetails.email}
        onChange={(e) =>
          setRegDetails({ ...RegDetails, email: e.target.value })
        }
      />
      <button>Submit</button>
    </form>
  );
};

export default Registration;
