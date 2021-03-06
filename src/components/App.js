import React, { useState } from "react";
import Gallery from "./Gallery";

function App(props) {
  const { api } = props;
  return <Gallery api={api} />;
}

export default App;
