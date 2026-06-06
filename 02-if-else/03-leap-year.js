// UC 3: Check whether a 4-digit year is leap year or not
// Usage: node 03-leap-year.js 2024

const year = Number(process.argv[2]);

if (year < 1000 || year > 9999) {
  console.log("Please enter a 4-digit year.");
} else if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is not a Leap Year`);
}
