import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Button, Modal } from "react-bootstrap";

const ShowForm = (nftData, handleChange, handleSubmit, showCorrectedBid) => {
  return (
    <div>
      <div className="bid">
        <center>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h5">
                  <b>{nftData.title}</b> by <b>{nftData.artist}</b>
                  <br />
                </p>
                <br />
                <img
                  src={nftData.image}
                  alt={nftData.title}
                  style={{
                    border: ".5mm ridge",
                    height: "500px",
                  }}
                />
                <br />
                <br />
                <p className="h5">
                  <small>
                    <b>
                      Current bid{" "}
                      {showCorrectedBid(nftData.topBid, nftData.chain)}&nbsp;
                      {nftData.chain}
                    </b>
                    &nbsp; by {nftData.topBidder}
                  </small>

                  <br />
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-5">Your Bid:</div>
              <div className="col-3 text-right" style={{ color: "#000000" }}>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Amount"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-2 text-left">{nftData.chain}</div>
            </div>
          </div>
        </center>
        <br />
        <table style={{ width: "100%" }}>
          <tr>
            <center>
              <Button
                type="submit"
                className="btn btn-primary btn-sm btn-block"
                onClick={handleSubmit}
              >
                Place Bid
              </Button>
            </center>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default function Bid(props) {
  const {
    email,
    nickName,
    nftData,
    bidItem,
    toHoonCrypto,
    toDisplayCrypto,
  } = useContext(AppContext);

  const piece = nftData[props.id];

  const [show, setShow] = useState(false);
  const [state, setState] = useState();

  const handleChange = (e) => {
    setState({ newBid: e.target.value, newBidder: nickName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendBidToUrbit = () => {
      bidItem({
        email: email[0],
        "exhibit-id": nftData[props.id].id,
        "bid-amt": parseInt(
          toHoonCrypto(state.newBid, nftData[props.id].chain)
        ),
      });
    };

    bidItem();

    // Check to see if new bid is higher than current bid
    if (state === undefined) {
      window.alert("Please enter a bid.");
    } else if (
      toHoonCrypto(state.newBid, nftData[props.id].chain) > piece.topBid
    ) {
      sendBidToUrbit();
      setShow(false);
      window.alert("Congratulations you are currently the highest bidder!");
    } else {
      window.alert(`Bid must be greater than ${piece.topBid} ${piece.chain}.`);
    }
  };

  const showCorrectedBid = (b, c) => {
    return toDisplayCrypto(b, c);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Bid
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {!localStorage.getItem("nickNameInLocalStorage") ? (
              "Login"
            ) : (
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <p className="h4">{nickName}</p>
                  </div>
                  <div className="col-3" style={{ color: "#8B8B8B" }}>
                    <small className="h6">({email})</small>
                  </div>
                </div>
              </div>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {email[0].includes("@") ? (
            ShowForm(piece, handleChange, handleSubmit, showCorrectedBid)
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
