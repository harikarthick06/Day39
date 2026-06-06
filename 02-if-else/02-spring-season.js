// UC 2: Print true if day and month is between March 20 and June 20
// Usage: node 02-spring-season.js 21 3

const day = Number(process.argv[2]);
const month = Number(process.argv[3]);

let result = false;

if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
  result = true;
}

console.log(result);
