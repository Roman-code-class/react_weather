import React, { Component } from "react";

class LoggingButton extends Component {
  handleClick = () => {};
  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Сегодня
      </button>
    );
  }
}

export default LoggingButton;
