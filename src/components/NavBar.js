import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Dropdown, Modal, Button } from "react-bootstrap";

export default function NavBar() {
  const { artists, selected } = useContext(AppContext);
  const [selectedArtist, setSelectedArtist] = selected;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectArtist = (artist) => {
    setSelectedArtist(artist);
  };

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
              <Dropdown.Toggle id="dropdown-basic">
                {selectedArtist === "all" ? "Artists" : selectedArtist}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => selectArtist("all")}>
                  All
                </Dropdown.Item>
                {artists.map((artist) => (
                  <Dropdown.Item onClick={() => selectArtist(artist)}>
                    {artist}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <Button variant="primary" onClick={handleShow}>
            {!localStorage.getItem("nickNameInLocalStorage")
              ? "Login"
              : localStorage.getItem("nickNameInLocalStorage")}
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                å
                {!localStorage.getItem("nickNameInLocalStorage")
                  ? "Login"
                  : "Account"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmailForm />
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
        </form>
      </div>
    </nav>
  );
}
