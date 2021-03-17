import React, { useContext, useEffect, useState, useCallback } from "react";
import AppContext from "../context";
import Bid from "./Bid";

export default function NftTable(props) {
  let { nftData, selectedArtistObject, toDisplayCrypto } = useContext(
    AppContext
  );
  const [selectedArtist] = selectedArtistObject;

  if (selectedArtist !== "all") {
    nftData = nftData.filter((nft) => nft.artist === selectedArtist);
  }

  const currency = (cur) =>  {
    if (cur === 'eth') {
      return "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_703c7cfc78f85bf307c3b5be61414552/ethereum.png";
    } else if (cur === 'raven') {
      return "https://pbs.twimg.com/profile_images/1333592450670211075/_NK4JX_e_400x400.jpg";
    }
  }

  const currencytxt = (cur) =>  {
    if (cur === 'eth') {
      return "ethereum";
    } else if (cur === 'raven') {
      return "raven";
    }
  }

  nftData = nftData.sort((a, b) => a.id - b.id);

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
                  return (
                    <div className="p-3" key={`auction-item-${nft.id}`}>
                      <a
                        href={nft.uri}
                        target="_blank"
                      >
                        <img
                          src={nft.image}
                          alt={nft.title}
                          style={{
                            border: "1mm ridge",
                            height: "300px",
                          }}
                        />
                      </a>
                      <center>
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
                                {toDisplayCrypto(nft.topBid, nft.chain)}{" "}
                                <img src={currency(nft.chain)} title={currencytxt(nft.chain)} alt={currencytxt(nft.chain)} height="30px"/>
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
                      </center>
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
