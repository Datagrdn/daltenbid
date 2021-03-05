import React, { useContext, useState } from "react";
import "reactjs-popup/dist/index.css";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Button, Modal } from "react-bootstrap";

const ShowForm = (email) => {
  return (
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <Popup trigger={<Button>Bid</Button>} position="top left">
    //   {email[0].includes("@") ? ShowForm(email) : <p>Please Enter E-mail</p>}
    // </Popup>
    <>
      <Button variant="primary" onClick={handleShow}>
        Bid
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {!localStorage.getItem("nickNameInLocalStorage")
              ? "Login"
              : localStorage.getItem("nickNameInLocalStorage")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {email[0].includes("@") ? ShowForm(email) : <EmailForm />}
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
