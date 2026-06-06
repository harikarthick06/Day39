// UC 1: Temperature conversion using function and switch case
// Usage:
// node 01-temperature-conversion.js 1 100  => Celsius to Fahrenheit
// node 01-temperature-conversion.js 2 212  => Fahrenheit to Celsius

function degCToDegF(degC) {
  return (degC * 9 / 5) + 32;
}

function degFToDegC(degF) {
  return (degF - 32) * 5 / 9;
}

const choice = Number(process.argv[2]);
const value = Number(process.argv[3]);

switch (choice) {
  case 1:
    if (value >= 0 && value <= 100) {
      console.log(`${value}°C = ${degCToDegF(value)}°F`);
    } else {
      console.log("Celsius input must be between 0°C and 100°C.");
    }
    break;

  case 2:
    if (value >= 32 && value <= 212) {
      console.log(`${value}°F = ${degFToDegC(value)}°C`);
    } else {
      console.log("Fahrenheit input must be between 32°F and 212°F.");
    }
    break;

  default:
    console.log("Invalid choice. Use 1 for C to F, 2 for F to C.");
}
