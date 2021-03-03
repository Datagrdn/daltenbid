import React, { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    localStorage.setItem("emailInLocalStorage", [email]);
  };

  const clearStorage = () => {
    console.log("clear storage");
    setEmail("E-mail");
    localStorage.setItem("emailInLocalStorage", [email]);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  };

  return !localStorage.getItem("emailInLocalStorage") ? (
    showForm(email)
  ) : (
    <p>
      {localStorage.getItem("emailInLocalStorage")}
      <p onClick={() => clearStorage()}>[change]</p>
    </p>
  );
}
