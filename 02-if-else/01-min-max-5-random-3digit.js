// UC 1: Generate 5 random 3-digit values and find min and max
let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
}

let min = numbers[0];
let max = numbers[0];

for (let number of numbers) {
  if (number < min) min = number;
  if (number > max) max = number;
}

console.log("Numbers:", numbers.join(", "));
console.log("Minimum:", min);
console.log("Maximum:", max);
