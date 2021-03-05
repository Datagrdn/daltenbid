import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Button, Modal } from "react-bootstrap";

const ShowForm = (email) => {
  return (
    <div>
      <div className="bid">
        <center>
          <table border="0" style={{ width: "50%" }}>
            <tr>
              <th width="50%">Bid Amount</th>
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

export default function Bid() {
  const { email, nickName } = useContext(AppContext);

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
                  <div class="col">
                    {localStorage.getItem("nickNameInLocalStorage")}
                  </div>
                  <div class="col" style={{ color: "#8B8B8B" }}>
                    <small>({email})</small>
                  </div>
                </div>
              </div>
            )}
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
