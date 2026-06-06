// UC 4: Print prime numbers in a range
// Usage: node 04-prime-range.js 10 50

const start = Number(process.argv[2]);
const end = Number(process.argv[3]);

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(`Prime numbers from ${start} to ${end}:`);
for (let number = start; number <= end; number++) {
  if (isPrime(number)) {
    console.log(number);
  }
}
