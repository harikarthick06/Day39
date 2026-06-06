// UC 2: Check if two numbers are palindromes of each other
// Usage: node 02-palindrome-two-numbers.js 121 121

function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    const digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reverse;
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (reverseNumber(num1) === num2) {
  console.log(`${num1} and ${num2} are Palindromes`);
} else {
  console.log(`${num1} and ${num2} are not Palindromes`);
}
