import React, { Component } from "react";
import Gallery from "./Gallery";

class App extends Component {
  render() {
    console.log("from app", localStorage);
    return <Gallery />;
  }
}

export default App;
