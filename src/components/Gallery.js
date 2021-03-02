import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let nftData = [
      {
        id: 1,
        title: "Cool Dude 1",
        image:
          "https://cdn.shopify.com/s/files/1/2564/9670/products/Ballmoji_Cool_Dude_GD44-EC1_240x.png?v=1546226227",
        chain: "eth",
        artist: "tocrex-holpen",
        topBid: "1.2",
        topBidder: "nickname",
      },
      {
        id: 2,
        title: "Cool Dude 2",
        image:
          "https://cdn.shopify.com/s/files/1/2564/9670/products/Ballmoji_Cool_Dude_GD44-EC1_240x.png?v=1546226227",
        chain: "eth",
        artist: "tocrex-holpen",
        topBid: "1.3",
        topBidder: "nickname",
      },
    ];

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
                  {nftData.map((nft) => (
                    <div key={nft.id}>
                      <img src={nft.image} height="100" width="100" />
                      <p>{nft.chain}</p>
                    </div>
                  ))}
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
