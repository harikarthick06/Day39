// UC 3: Check if number is prime, then check whether its palindrome is also prime
// Usage: node 03-prime-palindrome.js 13

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getPalindrome(number) {
  let reverse = 0;
  while (number > 0) {
    const digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reverse;
}

const number = Number(process.argv[2]);
const palindrome = getPalindrome(number);

if (isPrime(number)) {
  console.log(`${number} is Prime`);
  console.log(`Palindrome of ${number} is ${palindrome}`);

  if (isPrime(palindrome)) {
    console.log(`${palindrome} is also Prime`);
  } else {
    console.log(`${palindrome} is not Prime`);
  }
} else {
  console.log(`${number} is not Prime`);
}
