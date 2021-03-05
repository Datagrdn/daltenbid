import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context";

export default function EmailForm() {
  // const { email, setEmail } = useContext(AppContext);
  // const [formText, setFormText] = useState("");

  const { email, nickName } = useContext(AppContext);
  const [stateEmail, setEmail] = email;
  const [stateNickName, setNickName] = nickName;
  const [state, setState] = useState({
    email: "",
    nickName: "",
  });

  // const [emailText, setEmailText] = useState("");
  // const [nickNameText, setNickNameText] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("emailInLocalStorage", email);
  // }, [email]);

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
    } else {
      window.alert("Please enter valid e-mail and nickname");
    }
  };

  const clearStorage = () => {
    console.log("clear storage");
    setEmail("");
    setNickName("");
    localStorage.setItem("emailInLocalStorage", "");
  };

  const showForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
      <br />"{localStorage.getItem("nickNameInLocalStorage")}"
      <p onClick={clearStorage}>[change]</p>
    </p>
  );
}
