import React, { useContext } from "react";
import Popup from "reactjs-popup";
import AppContext from "../context";
import "reactjs-popup/dist/index.css";

const ShowForm = (email) => {
  return (close) => (
    <div>
      <div className="bid">
        <table border="0" style={{ width: "100%" }}>
          <tr>
            <th>
              <center>
                <small>
                  <b>{email}</b>
                </small>
              </center>
            </th>
          </tr>
        </table>
        <table border="0" style={{ width: "100%" }}>
          <tr>
            <th className="text-left" width="50%" style={{ color: "#8B8B8B" }}>
              <small>Bid Amount: </small>
            </th>
            <th style={{ color: "#000000" }}>
              {" "}
              <input
                type="text"
                className="form-control form-control-sm text-white"
                placeholder="Bid Amount"
                onChange={(e) => console.log(e.target.value)}
                required
              />
            </th>
          </tr>
        </table>
        <table style={{ width: "100%" }}>
          <tr>
            <center>
              <button
                type="submit"
                className="btn btn-primary btn-sm btn-block"
              >
                Place Bid
              </button>
            </center>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default function Bid() {
  const { email, nickName } = useContext(AppContext);
  return (
    <Popup trigger={<button>Bid</button>} position="top left">
      {email[0].includes("@") ? ShowForm(email) : <p>Please Enter E-mail</p>}
    </Popup>
  );
}
