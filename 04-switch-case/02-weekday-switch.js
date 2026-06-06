// UC 2: Display weekday using switch case
// Usage: node 02-weekday-switch.js 2

const day = Number(process.argv[2]);

switch (day) {
  case 0: console.log("Sunday"); break;
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  default: console.log("Invalid day number. Enter 0 to 6.");
}
