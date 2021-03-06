import React from "react";
import NftTable from "./NftTable";
import NavBar from "./NavBar";

function Gallery(props) {
  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        <NavBar />
        <NftTable api={props.api} />
      </div>
    </div>
  );
}

export default Gallery;
