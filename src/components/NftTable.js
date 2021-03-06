import React, { useContext } from "react";
import AppContext from "../context";
import Bid from "./Bid";

export default function NftTable() {
  let { nftData, selectedArtistObject } = useContext(AppContext);
  const [selectedArtist] = selectedArtistObject;

  // console.log(nftData);

  if (selectedArtist !== "all") {
    nftData = nftData.filter((nft) => nft.artist === selectedArtist);
  }

  // console.log("after if", nftData);

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
                      <Bid id={nft.id} />
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
