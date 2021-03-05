import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Dropdown, Modal, Button } from "react-bootstrap";

export default function NavBar() {
  const { artists } = useContext(AppContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="https://dalten.org/images/dalten-sigil.svg"
          width="100"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Dalten Collection
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Artists</Dropdown.Toggle>

              <Dropdown.Menu>
                {artists.map((artist) => (
                  <Dropdown.Item href="#">{artist}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <form class="form-inline my-2 my-lg-0">
          {/* <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmailForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    </nav>
  );
}
