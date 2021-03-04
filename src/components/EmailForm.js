import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context";

export default function EmailForm() {
  const { email, setEmail } = useContext(AppContext);
  const [formText, setFormText] = useState("");
  // const emailContext = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("emailInLocalStorage", email);
    console.log("email:", email);
  }, [email]);

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(formText);
  };

  const clearStorage = () => {
    console.log("clear storage");
    // setEmail("test@test.com");
    localStorage.setItem("emailInLocalStorage", "");
  };

  const showForm = () => {
    console.log("from emailform", localStorage);
    return (
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <br />
        <input name="email" value={formText} onChange={handleChange} />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  };

  return !localStorage.getItem("emailInLocalStorage") ||
    localStorage.getItem("emailInLocalStorage") === "E-mail" ? (
    showForm()
  ) : (
    <p>
      {localStorage.getItem("emailInLocalStorage")}
      <p onClick={() => clearStorage()}>[change]</p>
    </p>
  );
}
