import React, { Component } from "react";
import { nftData } from "./nftData";
import NftTable from "./NftTable";

class Gallery extends Component {
  render() {
    return <NftTable nftData={nftData} />;
  }
}

export default Gallery;
