import React, { useState, useCallback, useEffect } from "react";
import createApi from "../createApi";
import AppContext from ".";
import BigNumber from "bignumber.js"

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState(
    localStorage.getItem("emailInLocalStorage")
      ? localStorage.getItem("emailInLocalStorage")
      : "E-mail"
  );

  const [nickName, setNickName] = useState(
    localStorage.getItem("nickNameInLocalStorage")
      ? localStorage.getItem("nickNameInLocalStorage")
      : "Nickname"
  );

  const [selectedArtist, setSelectedArtist] = useState("all");
  const [selectedPiece, setSelectedPiece] = useState("");

  const [nftData, setNftData] = useState([]);
  const [urb, setUrb] = useState();
  const callback = useCallback(setNftData, [setNftData]);
  
  useEffect(() => {
    async function fetchUrb() {
    const _urb = await createApi();
    const sub = _urb.subscribe({
      app: "daltenauction",
      path: "/auctionsite",
      event: callback,
    });
    setUrb(_urb);
    return () => urb.unsubscribe(sub);
  }
  fetchUrb();
  }, [urb, callback]);

  const toHoonCrypto = (val, cur) => {
    let inc = new BigNumber(val);
    if (cur === 'eth') {
      let conFact = new BigNumber(1e+18)
      return inc.times(conFact).toFixed(0);
    } else {
      let conFact = new BigNumber(1e+8);
      return inc.times(conFact).toFixed(0);
    };
  };
  
  const toDisplayCrypto = (val, cur) => {
    let inc = new BigNumber(val);
    if (cur === 'eth') {
      let conFact = new BigNumber(1e+18)
      return inc.dividedBy(conFact).toFixed(8);
    } else {
      let conFact = new BigNumber(1e+8);
      return inc.dividedBy(conFact).toFixed(8);
    };
  };

  const addBidder = useCallback(
    (pokeArgs) => {
      if (!urb) {
        console.error("Poked before Urbit API initialized");
      }
      urb.poke({app: 'daltenauction', mark: 'daltenauction-action', json: {'add-bidder': pokeArgs}});
    },
    [urb]
  );

  const bidItem = useCallback(
    (pokeArgs) => {
      if (!urb) {
        console.error("Poked before Urbit API initialized");
      }
      urb.poke({app: 'daltenauction', mark: 'daltenauction-action', json: {'bid-item': pokeArgs}});
    },
    [urb]
  );

  // Creates an array of all artists from nftData
  const artists = [];
  nftData.forEach((nft) => {
    if (!artists.includes(nft.artist)) {
      artists.push(nft.artist);
    }
  });

  const context = {
    email: [email, setEmail],
    nickName: [nickName, setNickName],
    selectedArtistObject: [selectedArtist, setSelectedArtist],
    selctedPieceObject: [selectedPiece, setSelectedPiece],
    artists,
    nftData,
    bidItem,
    addBidder,
    toHoonCrypto,
    toDisplayCrypto
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
