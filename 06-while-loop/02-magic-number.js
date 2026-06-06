// UC 2: Find magic number between 1 and 100 using binary search idea
// Run: node 02-magic-number.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let low = 1;
let high = 100;

console.log("Think of a number between 1 and 100.");
console.log("Answer using: y for yes, l if your number is lower, h if your number is higher");

function ask() {
  if (low > high) {
    console.log("Something went wrong. Please answer correctly.");
    rl.close();
    return;
  }

  const mid = Math.floor((low + high) / 2);
  rl.question(`Is your number ${mid}? `, (answer) => {
    if (answer === "y") {
      console.log(`Magic Number is ${mid}`);
      rl.close();
    } else if (answer === "l") {
      high = mid - 1;
      ask();
    } else if (answer === "h") {
      low = mid + 1;
      ask();
    } else {
      console.log("Please enter only y, l, or h.");
      ask();
    }
  });
}

ask();
