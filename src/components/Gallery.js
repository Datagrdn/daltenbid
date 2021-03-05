import React from "react";
import { nftData } from "./nftData";
import NftTable from "./NftTable";
import NavBar from "./NavBar";
import EmailForm from "./EmailForm";

function Gallery() {
  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        {/* <img src="https://dalten.org/images/dalten-sigil.svg" />
        <br />
        <br />
        <EmailForm /> */}
        <NavBar />
        <NftTable nftData={nftData} />
      </div>
    </div>
  );
}

export default Gallery;
