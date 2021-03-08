import React, { useState, useCallback, useEffect } from "react";
import createApi from "../createApi";
import AppContext from ".";

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
  
  useEffect(async () => {
    const _urb = await createApi();
    const sub = _urb.subscribe({
      app: "daltenauction",
      path: "/auctionsite",
      event: callback,
    });
    setUrb(_urb);
    return () => urb.unsubscribe(sub);
  }, [urb]);

  const bidPoke = (pokeargs) => {
    urb.poke(pokeargs);
  }

  const somePoke = useCallback(
    (pokeArgs) => {
      if (!urb) {
        console.error("Poked before Urbit API initialized");
      }
      urb.poke({app: 'daltenauction', mark: 'daltenauction-action', json: {'bid-item': {'email': 'test@testemail.com', 'exhibit-id': 1, 'bid-amt': 500}}});
    },
    [urb]
  );

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
    addBidder
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
