import React, { useContext, useEffect, useState, useCallback } from "react";
import AppContext from "../context";
import Bid from "./Bid";

export default function NftTable(props) {
  let { nftData, selectedArtistObject, toDisplayCrypto } = useContext(AppContext);
  const [selectedArtist] = selectedArtistObject;

  if (selectedArtist !== "all") {
    nftData = nftData.filter((nft) => nft.artist === selectedArtist);
  }

  console.log(nftData);

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
                {nftData.map((nft, index) => {
                  console.log(index);
                  return (
                    <div className="p-3" key={`auction-item-${nft.id}`}>
                      <img
                        src={process.env.PUBLIC_URL + `${nft.image}`}
                        alt={nft.title}
                        style={{
                          border: "1mm ridge",
                          height: "300px",
                        }}
                      />
                      <table style={{ width: "300px" }}>
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
                              {toDisplayCrypto(nft.topBid, nft.chain)} {nft.chain}
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
                          <tr>
                            <th
                              className="text-left"
                              style={{ color: "#8B8B8B" }}
                            >
                              Find Out More:
                            </th>
                            <td>
                            <a
                                href={nft.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                // style={{ color: "#55FF55" }}
                              >
                                Here
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <Bid id={index} />
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
