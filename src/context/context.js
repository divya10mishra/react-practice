import { createContext } from "react";

const dataContext = createContext({
  student: { fname: "", lname: "" },
  parents: {fatherName: "",
  motherName: "",
  email: "",},
});

export default dataContext;
