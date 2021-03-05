import React, { useState } from "react";
import { nftData } from "../components/nftData";
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

  const [selected, setSelected] = useState("all");

  const artists = [];
  nftData.forEach((nft) => {
    if (!artists.includes(nft.artist)) {
      artists.push(nft.artist);
    }
  });

  const context = {
    email: [email, setEmail],
    nickName: [nickName, setNickName],
    selected: [selected, setSelected],
    artists,
    nftData,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
