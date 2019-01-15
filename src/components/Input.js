import React, { Component } from "react";

var date = new Date();
var now = date.getHours() + ":" + date.getMinutes();

class Input extends Component {
  render() {
    return (
      <div>
        <input type="time" />
      </div>
    );
  }
}
export default Input;
