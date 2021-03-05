import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Button, Modal } from "react-bootstrap";

const ShowForm = (email, nftData) => {
  // const [state, setState] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    // setState({ bid: e.target.value });
  };

  return (
    <div>
      <div className="bid">
        <center>
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="h5">
                  <b>{nftData.title}</b> by <b>{nftData.artist}</b>
                </p>
                <br />
                <img
                  src={nftData.image}
                  style={{
                    border: "1mm ridge",
                    width: "200px",
                    height: "300px",
                  }}
                />
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col">Bid Amount</div>
              <div class="col-3 text-right" style={{ color: "#000000" }}>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Amount"
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="col-2 text-left">{nftData.chain}</div>
            </div>
          </div>
        </center>
        <br />
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

export default function Bid(props) {
  const { email, nickName, nftData } = useContext(AppContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Bid
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {!localStorage.getItem("nickNameInLocalStorage") ? (
              "Login"
            ) : (
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <p class="h4">
                      {localStorage.getItem("nickNameInLocalStorage")}
                    </p>
                    {/* <p class="h4">{nftData[props.id - 1].title}</p> */}
                  </div>
                  <div class="col-3" style={{ color: "#8B8B8B" }}>
                    <small class="h6">({email})</small>
                    {/* <p class="h6">{nftData[props.id - 1].artist}</p> */}
                  </div>
                </div>
              </div>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {email[0].includes("@") ? (
            ShowForm(email, nftData[props.id - 1])
          ) : (
            <EmailForm />
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
