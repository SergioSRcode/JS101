const RL_SYNC = require("readline-sync");

// ask user to enter length and width of a room in meters
// log area of the room in square meters and square feet

function prompt(message) {
  console.log('=> ' + message);
}

function askForLength() {
  prompt('Enter the length of the room in meters!');
  let roomLengthInMeters = RL_SYNC.question();
  return roomLengthInMeters.replace(/[a-zA-Z]/g, "");
}
function askForWidth() {
  prompt('Enter the width of the room in meters!');
  let roomWidthInMeters = RL_SYNC.question();
  return roomWidthInMeters.replace(/[a-zA-Z]/g, "");
}

function result(length, width) {
  let resultInSqMeters = Number(length) * Number(width);
  let resultInSqFeet = resultInSqMeters * 10.7639;
  prompt(`The area of the room is ${resultInSqMeters.toFixed(2)} square meters (${resultInSqFeet.toFixed(2)} square feet)`);
}

// program start

console.clear();

let lengthOfRoom = askForLength();
let widthOfRoom = askForWidth();
result(lengthOfRoom, widthOfRoom);