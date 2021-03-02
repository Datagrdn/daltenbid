import React, { Component } from "react";
import { nftData } from "./nftData";

class Gallery extends Component {
  render() {
    return (
      <div className="Main">
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <div
                  className="row justify-content-around"
                  style={{ width: "1000px", fontSize: "13px" }}
                >
                  {nftData.map((nft) => {
                    return (
                      <div className="p-3" key={nft.id}>
                        <img
                          src={nft.image}
                          style={{
                            border: "1mm ridge",
                            width: "200px",
                            height: "300px",
                          }}
                        />
                        <p>{nft.chain}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
