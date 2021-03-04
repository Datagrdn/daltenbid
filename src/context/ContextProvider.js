import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState(
    localStorage.getItem("emailInLocalStorage")
      ? localStorage.getItem("emailInLocalStorage")
      : "E-mail"
  );
  const context = {
    setEmail,
    email,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
