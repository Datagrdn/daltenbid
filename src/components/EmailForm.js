import React, { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("emailInLocalStorage", [email]);
    console.log(email);
  };

  return !localStorage.getItem("emailInLocalStorage") ? (
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
  ) : (
    <p>
      {localStorage.getItem("emailInLocalStorage")}
      <p onClick={() => localStorage.setItem("emailInLocalStorage", "")}>
        [change]
      </p>
    </p>
  );
}
