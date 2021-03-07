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
    return () => _urb.unsubscribe(sub);
  }, []);

  const bidItem = useCallback(
    async (pokeArgs) => {
      if (!urb) {
        console.error("Poked before Urbit API initialized");
      }
      urb.poke({
        app: "daltenauction",
        mark: "dalatenauction-action",
        json: {
          "bid-item": {
            email: "jon@datagarden.org",
            "exhibit-id": 4,
            "bid-amt": 101,
          },
        },
      });
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
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
