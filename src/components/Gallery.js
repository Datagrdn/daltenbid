import React, { Component, useState } from "react";
import { nftData } from "./nftData";
import { NftTable } from "./NftTable";

const Gallery = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("emailInLocalStorage", [email]);
    console.log(email);
  };

  // const onChange = (event) => setEmail(event.target.value);
  // const resetEmail = (event) => localStorage.setItem("emailInLocalStorage", "");

  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        <img src="https://dalten.org/images/dalten-sigil.svg" />
        <br />
        <br />
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
        <p>{localStorage.getItem("emailInLocalStorage")}</p>

        {/* {!localStorage.getItem("emailInLocalStorage") ? (
          <input value={value} type="text" onChange={onChange} />
        ) : (
          <p>
            {value} <p onClick={resetEmail}>[change]</p>
          </p>
        )} */}
        <NftTable nftData={nftData} />
      </div>
    </div>
  );
};

export default Gallery;
