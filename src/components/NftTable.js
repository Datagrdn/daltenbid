import React, { useContext, useEffect, useState, useCallback } from "react";
import AppContext from "../context";
import Bid from "./Bid";
import { toEth } from "../helpers";

export default function NftTable(props) {
  let { nftData, selectedArtistObject } = useContext(AppContext);
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
                  console.log(nft.uri);
                  console.log(index);
                  return (
                    <div className="p-3" key={`auction-item-${nft.id}`}>
                      <img
                        src={nft.uri}
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
                              {toEth(nft.topBid)} {nft.chain}
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
