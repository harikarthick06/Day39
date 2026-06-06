// UC 4: Read 5 random 2-digit values, find sum and average
let sum = 0;
let numbers = [];

for (let i = 1; i <= 5; i++) {
  const value = Math.floor(Math.random() * 90) + 10; // 10 to 99
  numbers.push(value);
  sum += value;
}

const average = sum / 5;

console.log("Random 2-digit numbers:", numbers.join(", "));
console.log("Sum:", sum);
console.log("Average:", average);
