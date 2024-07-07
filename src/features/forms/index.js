import React, { useState, useContext } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import dataContext from "../../context/context";

function MultiForm() {
  let obj = [{ form1: <Form1 /> }, { form2: <Form2 /> }, { form3: <Form1 /> }];
  const contextDetails = useContext(dataContext);
  const [currentForm, setCurrentForm] = useState("form1");
  const [payload, setPayload] = useState(contextDetails);

  const handleNavigation = (buttonType) => {
    obj.forEach((item, index) => {
      if (item.hasOwnProperty(currentForm)) {
        let key = "";
        if (buttonType == "next") {
          key = Object.keys(obj[index + 1])[0];
        }
        if (buttonType == "prev") {
          key = Object.keys(obj[index - 1])[0];
        }

        setCurrentForm(key);
      }
    });
  };

  const handleSubmit = () => {
    console.log(payload, "payload is ready");
  };

  const getForm = () => {
    const form = obj.find((item) => {
      if (item.hasOwnProperty(currentForm)) {
        return item;
      }
    });
    return form[currentForm];
  };

  return (
    <>
      <div
        style={{ border: "2px solid blue", padding: "10px", margin: "15px" }}
      >
        <dataContext.Provider value={{ payload, setPayload }}>
          {getForm()}
        </dataContext.Provider>
      </div>

      {currentForm !== "form1" && (
        <button onClick={() => handleNavigation("prev")}>Previous</button>
      )}
      {currentForm !== "form3" ? (
        <button onClick={() => handleNavigation("next")}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </>
  );
}

export default MultiForm;
