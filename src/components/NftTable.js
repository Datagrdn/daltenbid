import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context";
import Bid from "./Bid";

export default function NftTable(props) {
  var nftData = [];
  const urb = props.api;
  console.log(urb);
  const [nftDataAll, setnftData] = useState([]);

  useEffect(() => { const sub = urb.subscribe({ app: 'daltenauction', path: '/auctionsite', event: data => {
    setnftData([
      {
        artist: "~dashus-navnul",
        id: 1,
        title: "Cool Dude 1",
        image:
          "https://cdn.shopify.com/s/files/1/2564/9670/products/Ballmoji_Cool_Dude_GD44-EC1_240x.png?v=1546226227",
        chain: "BSV",
        topBid: "1.2",
        topBidder: "nickname",
      }
    ]);
    console.log("here");
  }}, [nftDataAll, setnftData])
  }, []);
  
  let { selectedArtistObject } = useContext(AppContext);
  const [selectedArtist] = selectedArtistObject;

  // console.log(nftData);

  if (selectedArtist !== "all") {
    nftData = nftDataAll.filter((nft) => nft.artist === selectedArtist);
  } else {
    nftData = nftDataAll;
  }

  console.log("after if", nftData);

  const {api} = props;
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
                      <table style={{ width: "200px" }}>
                        <thead>
                          <tr>
                            <th
                              className="text-left"
                              style={{ color: "#8B8B8B" }}
                            >
                              Title:
                            </th>
                            <th style={{ color: "#000000" }}>{nft.title}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th
                              className="text-left"
                              style={{ color: "#8B8B8B" }}
                            >
                              Artist:
                            </th>
                            <td>
                              <a
                                href={nft.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                // style={{ color: "#55FF55" }}
                              >
                                {nft.artist}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="text-left"
                              style={{ color: "#8B8B8B" }}
                            >
                              Top Bid:
                            </th>
                            <th style={{ color: "#000000" }}>
                              {nft.topBid} {nft.chain}
                            </th>
                          </tr>
                          <tr>
                            <th
                              className="text-left"
                              style={{ color: "#8B8B8B" }}
                            >
                              Top Bidder:
                            </th>
                            <th style={{ color: "#000000" }}>
                              {nft.topBidder}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                      <Bid id={nft.id} nftData={api} {...props} />
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
