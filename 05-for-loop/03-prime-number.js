// UC 3: Check whether a number is prime
// Usage: node 03-prime-number.js 17

const number = Number(process.argv[2]);
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? `${number} is Prime` : `${number} is not Prime`);
