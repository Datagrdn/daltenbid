import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Dropdown, Modal, Button } from "react-bootstrap";

export default function NavBar() {
  const { artists, selectedArtistObject } = useContext(AppContext);
  const [selectedArtist, setSelectedArtist] = selectedArtistObject;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  const whatLink = () => {
    if (selectedArtist === "~dashus-navnul") {return "https://meet.jit.si/dashusnavnulGrimoiredaltenauction";};
    if (selectedArtist === "~tocrex-holpen") {return "https://meet.jit.si/tocrexholpenGalaxyGirlsdaltenauction"};
    if (selectedArtist === "~minder-folden") {return "https://meet.jit.si/minderfoldenMindFolderdaltenauction"};
    if (selectedArtist === "~naltyc-wornes") {return "https://meet.jit.si/naltycwornesSmolArtsdaltenauction"};
    return "https://meet.jit.si/DaltenCollectionDebut";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://dalten.org">
        <img
          src="https://dalten.org/images/dalten-sigil.svg"
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Dalten Collection
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" variant="secondary">
                {selectedArtist === "all" ? "Artists" : selectedArtist}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => selectArtist("all")}>
                  All
                </Dropdown.Item>
                {artists.map((artist) => (
                  <Dropdown.Item
                    key={`artist-${artist}`}
                    onClick={() => selectArtist(artist)}
                  >
                    {artist}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li className="navbar-brand">
            <strong><a href={whatLink()} target="blank" style={{ color: 'rgb(100, 109, 116)', textDecoration: 'underline' }}>Join the Conversation (hosted on Jitsi)</a></strong>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Button variant="secondary" onClick={handleShow}>
            {!localStorage.getItem("nickNameInLocalStorage")
              ? "Register"
              : localStorage.getItem("nickNameInLocalStorage")}
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {!localStorage.getItem("nickNameInLocalStorage")
                  ? "Login"
                  : "Hello " + localStorage.getItem("nickNameInLocalStorage")}
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
