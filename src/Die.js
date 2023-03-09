import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)
    this.toggleDie = this.toggleDie.bind(this)
  }
  
  toggleDie() {
    this.props.handleClick(this.props.idx)
  }  
  
  render() {
    const { numberWords, locked, val } = this.props
    let classes = `Die fas fa-dice-${numberWords[val-1]} fa-4x `
    if (locked) classes += 'Die-locked'

    return (
      <i
        className={classes}
        onClick={this.toggleDie}
      >
      </i>
    );
  }
}

export default Die;
