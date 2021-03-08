import React, { useContext, useState } from "react";
import AppContext from "../context";
import EmailForm from "./EmailForm";
import { Button, Modal } from "react-bootstrap";

const ShowForm = (nftData, handleChange, handleSubmit) => {
  // console.log(nftData.title, "by", nftData.artist);
  return (
    <div>
      <div className="bid">
        <center>
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="h5">
                  <b>{nftData.title}</b> by <b>{nftData.artist}</b>
                  <br />
                </p>
                <br />
                <img
                  src={nftData.uri}
                  style={{
                    border: "1mm ridge",
                    width: "200px",
                    height: "300px",
                  }}
                />
                <br />
                <br />
                <p class="h5">
                  <small>
                    <b>
                      Current bid {nftData.topBid}&nbsp;
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
            <div class="row">
              <div class="col-5">Your Bid:</div>
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
  const { email, nickName, nftData, bidItem } = useContext(AppContext);

  console.log(nftData);
  const piece = nftData[props.id];
  console.log(piece);

  const [show, setShow] = useState(false);
  const [state, setState] = useState();

  const handleChange = (e) => {
    setState({ newBid: e.target.value, newBidder: nickName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendBidToUrbit = () => {
      console.log(nftData[props.id].id);
      console.log(parseInt(state.newBid));
      bidItem({'email': email[0], 'exhibit-id': nftData[props.id].id, 'bid-amt': parseInt(state.newBid)});
    };

    // Check to see if new bid is higher than current bid
    if (state.newBid > piece.topBid) {
      sendBidToUrbit();
      window.alert("Congratulations you are currently the highest bidder!");
    } else {
      window.alert(`Bid must be greater than ${piece.topBid} ${piece.chain}`);
    }
  };

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
                    <p class="h4">{nickName}</p>
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
            ShowForm(piece, handleChange, handleSubmit)
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
