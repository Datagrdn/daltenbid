import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default class Bid extends Component {
  render() {
    return (
      <Popup trigger={<button>Place Bid</button>} position="top left">
        {localStorage.getItem("emailInLocalStorage").includes("@") ? (
          (close) => (
            <div>
              <div className="bid">
                <table border="0" style={{ width: "100%" }}>
                  <tr>
                    <th>
                      <center>
                        <small>
                          <b>{localStorage.getItem("emailInLocalStorage")}</b>
                        </small>
                      </center>
                    </th>
                  </tr>
                </table>
                <table border="0" style={{ width: "100%" }}>
                  <tr>
                    <th
                      className="text-left"
                      width="50%"
                      style={{ color: "#8B8B8B" }}
                    >
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
          )
        ) : (
          <p>Please Enter E-mail</p>
        )}
      </Popup>
    );
  }
}
