import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context";

export default function EmailForm() {
  const { email, setEmail } = useContext(AppContext);
  const [formText, setFormText] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("emailInLocalStorage", email);
  // }, [email]);

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(formText);
    localStorage.setItem("emailInLocalStorage", formText);
  };

  const clearStorage = () => {
    console.log("clear storage");
    setEmail("");
    localStorage.setItem("emailInLocalStorage", "");
  };

  const showForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <br />
        <input type="text" value={formText} onChange={handleChange} />
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
      <p onClick={clearStorage}>[change]</p>
    </p>
  );
}
