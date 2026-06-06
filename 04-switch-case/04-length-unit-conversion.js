// UC 4: Unit conversion using switch case
// Usage examples:
// node 04-length-unit-conversion.js 1 10   => Feet to Inch
// node 04-length-unit-conversion.js 2 10   => Feet to Meter
// node 04-length-unit-conversion.js 3 120  => Inch to Feet
// node 04-length-unit-conversion.js 4 3    => Meter to Feet

const choice = Number(process.argv[2]);
const value = Number(process.argv[3]);

switch (choice) {
  case 1:
    console.log(`${value} feet = ${value * 12} inches`);
    break;
  case 2:
    console.log(`${value} feet = ${value * 0.3048} meters`);
    break;
  case 3:
    console.log(`${value} inches = ${value / 12} feet`);
    break;
  case 4:
    console.log(`${value} meters = ${value / 0.3048} feet`);
    break;
  default:
    console.log("Invalid choice. Use 1, 2, 3, or 4.");
}
