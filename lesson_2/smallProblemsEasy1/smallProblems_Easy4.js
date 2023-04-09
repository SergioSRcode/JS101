const RL_SYNC = require("readline-sync");

// ask user to enter length and width of a room in meters
// log area of the room in square meters and square feet

function prompt(message) {
  console.log('=> ' + message);
}

function askForMeasure() {
  prompt('Would you like to calculate in meters or feet?\n1) Meters\n2) Feet');
  let MeterOrFeet = RL_SYNC.question();
  return MeterOrFeet;
}

function askForLength() {
  prompt('Enter the length of the room!');
  let roomLength = RL_SYNC.question();
  return roomLength.replace(/[a-zA-Z]/g, "");
}
function askForWidth() {
  prompt('Enter the width of the room!');
  let roomWidth = RL_SYNC.question();
  return roomWidth.replace(/[a-zA-Z]/g, "");
}

function result(length, width, measure) {
  let resultInSqMeters = Number(length) * Number(width);
  let resultInSqFeet = Number(length) * Number(width);
  let conversionMeterToFeet = resultInSqMeters * 10.7639;
  let conversionFeetToMeter = resultInSqFeet / 10.7639;

  if (measure === "1") {
    prompt(`The area of the room is ${resultInSqMeters.toFixed(2)} square meters (${conversionMeterToFeet.toFixed(2)} sqare feet)`);
  } else if (measure === "2") {
    prompt(`The area of the room is ${resultInSqFeet.toFixed(2)} square feet (${conversionFeetToMeter.toFixed(2)} square meters)`);
  }
}

// program start

console.clear();

let mOrFt = askForMeasure();
let lengthOfRoom = askForLength();
let widthOfRoom = askForWidth();
result(lengthOfRoom, widthOfRoom, mOrFt);