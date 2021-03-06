import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ContextProvider from "./context/ContextProvider";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import useApi from "./useApi";

const root = document.getElementById("root");

(async () => {
  const api = await useApi();
  ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <App api={api} />
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
