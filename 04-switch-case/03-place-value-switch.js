// UC 3: Display unit, ten, hundred, etc. using switch case
// Usage: node 03-place-value-switch.js 1000

const number = Number(process.argv[2]);

switch (number) {
  case 1: console.log("Unit"); break;
  case 10: console.log("Ten"); break;
  case 100: console.log("Hundred"); break;
  case 1000: console.log("Thousand"); break;
  case 10000: console.log("Ten Thousand"); break;
  case 100000: console.log("Lakh"); break;
  default: console.log("Invalid input. Enter 1, 10, 100, 1000, etc.");
}
