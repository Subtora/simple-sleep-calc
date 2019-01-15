import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Input from "./components/Input.js";
console.log("---This is index.js---");

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Input />, document.getElementById("timeIn"));
