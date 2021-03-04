import React, { useState, useContext } from "react";
import AppContext from "../context";

export default function EmailForm() {
  // const [email, setEmail] = useState("");
  const emailContext = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailContext.setEmail(e.target.value);
    localStorage.setItem("emailInLocalStorage", [emailContext.email]);
  };

  const clearStorage = () => {
    console.log("clear storage");
    emailContext.setEmail("test@test.com");
    localStorage.setItem("emailInLocalStorage", [emailContext.email]);
  };

  const showForm = (email) => {
    console.log("from emailform", localStorage);
    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>E-mail</label>
        <br />
        <input
          name="email"
          value={emailContext.email}
          onChange={(e) => emailContext.setEmail(e.target.value)}
        />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  };

  return !localStorage.getItem("emailInLocalStorage") ? (
    showForm(emailContext.email)
  ) : (
    <p>
      {localStorage.getItem("emailInLocalStorage")}
      <p onClick={() => clearStorage()}>[change]</p>
    </p>
  );
}
