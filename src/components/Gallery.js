import React, { Component } from "react";
import { nftData } from "./nftData";
import { NftTable } from "./NftTable";

const Gallery = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("emailInLocalStorage") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("emailInLocalStorage", value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <div className="Main">
      <div className="container-fluid mt-5">
        <img src="https://dalten.org/images/dalten-sigil.svg" />
        <br />
        <br />
        <input value={value} type="text" onChange={onChange} />
        <p>{value}</p>
        <NftTable nftData={nftData} />
      </div>
    </div>
  );
};

export default Gallery;
