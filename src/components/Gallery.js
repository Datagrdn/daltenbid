import React from "react";
import NftTable from "./NftTable";
import NavBar from "./NavBar";

function Gallery() {
  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        <NavBar />
        <NftTable />
      </div>
    </div>
  );
}

export default Gallery;
