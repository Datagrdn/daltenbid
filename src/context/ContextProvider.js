import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState(
    localStorage.getItem("emailInLocalStorage")
      ? localStorage.getItem("emailInLocalStorage")
      : "E-mail"
  );

  const [nickName, setNickName] = useState(
    localStorage.getItem("nickInLocalStorage")
      ? localStorage.getItem("nickInLocalStorage")
      : "Nickname"
  );

  const context = {
    email: [email, setEmail],
    nickName: [nickName, setNickName],
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
