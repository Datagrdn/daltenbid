import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context";
import { Button } from "react-bootstrap";

export default function EmailForm() {
  const { email, nickName, addBidder } = useContext(AppContext);
  const [stateEmail, setEmail] = email;
  const [stateNickName, setNickName] = nickName;
  const [state, setState] = useState({
    email: "",
    nickName: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email.includes("@") && state.nickName) {
      setEmail(state.email);
      setNickName(state.nickName);
      localStorage.setItem("emailInLocalStorage", state.email);
      localStorage.setItem("nickNameInLocalStorage", state.nickName);
      addBidder({'email': state.email, 'nick': state.nickName})
    } else {
      window.alert("Please enter valid e-mail and nickname");
    }
  };

  const clearStorage = () => {
    setEmail("");
    setNickName("");
    localStorage.setItem("emailInLocalStorage", "");
    localStorage.setItem("nickNameInLocalStorage", "");
  };

  const showForm = () => {
    return (
      <form>
        <label>E-mail</label>
        <br />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <br />
        <label>Nick Name</label>
        <br />
        <input
          type="text"
          name="nickName"
          value={state.nickName}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    );
  };

  return !localStorage.getItem("emailInLocalStorage") ||
    localStorage.getItem("emailInLocalStorage") === "E-mail" ? (
    showForm()
  ) : (
    <p>
      <br />
      Logged in as <b>{localStorage.getItem("emailInLocalStorage")}</b>
      <br />
      <br />
      <br />
      <Button onClick={clearStorage}>Edit</Button>
    </p>
  );
}
