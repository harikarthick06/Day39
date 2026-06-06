// UC 5: Compute factorial of a number
// Usage: node 05-factorial.js 5

const number = Number(process.argv[2]);
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`${number}! = ${factorial}`);
