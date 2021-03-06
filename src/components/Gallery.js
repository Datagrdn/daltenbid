import React from "react";
import NftTable from "./NftTable";
import NavBar from "./NavBar";

function Gallery(props) {
  const {api} = props;
  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        {/* <img src="https://dalten.org/images/dalten-sigil.svg" />
        <br />
        <br />
        <EmailForm /> */}
        <NavBar />
        <NftTable api={api} {...props}/>
      </div>
    </div>
  );
}

export default Gallery;
