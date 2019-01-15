import React, { Component } from "react";

import "../styles/App.css";
var timesList = [
  { hours: 0, minutes: 0 },
  { hours: 0, minutes: 0 },
  { hours: 0, minutes: 0 },
  { hours: 0, minutes: 0 },
  { hours: 0, minutes: 0 },
  { hours: 0, minutes: 0 }
];
var time = { hours: 8, minutes: 0 };
function fixTime() {
  let base = Math.floor(time.minutes / 60);
  let rem = time.minutes % 60;

  if (time.minutes > 59) {
    time.minutes = rem;
    time.hours += base;
  } else if (time.minutes < 0) {
    time.hours--;
  }
  if (time.hours > 12) {
    time.hours = 1;
  } else if (time.hours < 1) {
    time.hours = 12;
  }
}
function alterTime(type, ammount) {
  type ? (time.minutes += ammount) : (time.minutes -= ammount);
}
for (var i = 0; i < timesList.length; i++) {
  alterTime(1, 90);
  fixTime();
  timesList[i].hours = time.hours;
  timesList[i].minutes = time.minutes;
}

class App extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>{timesList[0].hours + ":" + timesList[0].minutes}</td>
            <td>{timesList[1].hours + ":" + timesList[1].minutes}</td>
            <td>{timesList[2].hours + ":" + timesList[2].minutes}</td>
          </tr>
          <tr>
            <td>{timesList[3].hours + ":" + timesList[3].minutes}</td>
            <td>{timesList[4].hours + ":" + timesList[4].minutes}</td>
            <td>{timesList[5].hours + ":" + timesList[5].minutes}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
