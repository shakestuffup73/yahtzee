import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  toggleDie = e => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.toggleDie}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
