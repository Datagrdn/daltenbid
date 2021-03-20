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
      <br/>
      <br/>
    <center><table>
      <tr>
        <td colspan="4" style={{ color: 'rgb(100, 109, 116)', fontSize: '30px', textAlign: 'center'}}>Items donated to the ~dalten Collection</td>
      </tr>
      <tr>
        <td colspan="4" style={{ color: 'red', fontSize: '15px', textAlign: 'center'}}>not for sale</td>
      </tr>
      <tr>
        <td style={{ width: "350px" }}>
          <center>~dashus-navnul</center>
        </td>
        <td style={{ width: "350px" }}>
          <center>~naltyc-wornes</center>
        </td>
        <td style={{ width: "350px" }}>
          <center>~minder-folden</center>
        </td>
        <td style={{ width: "350px" }}>
          <center>~tocrex-holpen</center>
        </td>
      </tr>
      <tr>
        <td><center>
        ~dashus-navnul's Grimoire 8
          <br></br>
          <img style={{ width: "250px" }} src="https://lh3.googleusercontent.com/IYkbhjuUl3vCNzrgy9xJrDc9YDMJ2q8WnxvWw9_nlSPLQIDy0aohZrKW58AKxmVGbN6GgwzFTAjcvBlDlQ8MAz2w_8vSwAf5D6He=s0" />
        </center></td>
        <td><center>
        Memories of Futures Past:
          <br></br>
          <img style={{ width: "300px" }} src="https://www.nvrmor.io/wp-content/uploads/2021/03/Memories-Of-Futures-Past-Preview.jpg" />
        </center></td>
        <td><center>
        HighTimes
          <br></br>
          <img style={{ width: "300px" }} src="https://ravencoin.asset-explorer.net/ipfs/QmXuetVettUDVddL43JFS9HCx4zu2vtu6aDERCaev3UbFR" />
        </center></td>
        <td><center>
        One of each of the Galaxy Girls:
          <br></br>
          <img style={{ width: "300px" }} src="https://lh3.googleusercontent.com/btNsA7EhW5UgiYRzvL44tka1PgBuIi-pV-5BfN63M-AHH1ooVMgPyxdAT4tOcB4JcGPWgvVaVAj5KAlvlgQwqahGXRcpM13Uc-1UVQ" />
        </center></td>
      </tr>
    </table></center>
    </div>
  );
}
