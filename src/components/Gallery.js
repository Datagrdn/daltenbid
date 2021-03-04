import React from "react";
import { nftData } from "./nftData";
import NftTable from "./NftTable";
import EmailForm from "./EmailForm";

function Gallery() {
  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        <img src="https://dalten.org/images/dalten-sigil.svg" />
        <br />
        <br />
        <EmailForm />
        <NftTable nftData={nftData} />
      </div>
    </div>
  );
}

export default Gallery;
