// UC 6: Print prime factors using prime factorization method
// Usage: node 06-prime-factors.js 84

let number = Number(process.argv[2]);
let factors = [];

for (let i = 2; i * i <= number; i++) {
  while (number % i === 0) {
    factors.push(i);
    number = number / i;
  }
}

if (number > 1) {
  factors.push(number);
}

console.log("Prime Factors:", factors.join(" x "));
