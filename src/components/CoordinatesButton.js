import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super();
    this.state = {
      onReceiveCoordinates: props.onReceiveCoordinates
    };
  }

  handleClick = e => {
    return this.state.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coordinates Button</button>;
  }
}
