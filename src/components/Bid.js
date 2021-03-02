import React, { Component } from "react";

export default class Bid extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <p>Place your bid</p>
        </div>
      </div>
    );
  }
}
