import React, { Component } from "react";
import { nftData } from "./nftData";
import { NftTable } from "./NftTable";

class Gallery extends Component {
  render() {
    return (
      <div className="Main">
        <div className="container-fluid mt-5">
          <img src="https://dalten.org/images/dalten-sigil.svg" />
          <NftTable nftData={nftData} />
        </div>
      </div>
    );
  }
}

export default Gallery;
