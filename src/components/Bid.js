import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default class Bid extends Component {
  render() {
    return (
      <Popup trigger={<button>Place Bid</button>} position="top left">
        {(close) => (
          <div>
            <div className="bid">
              <table border="0" style={{ width: "100%" }}>
                <tr>
                  <th className="text-left" style={{ color: "#8B8B8B" }}>
                    Bid Amount:{" "}
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
        )}
      </Popup>
    );
  }
}
