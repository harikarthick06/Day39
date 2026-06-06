// UC 4: Perform arithmetic operations and find max and min
// Usage: node 04-arithmetic-max-min.js 10 5 2

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

let max = op1;
let min = op1;

if (op2 > max) max = op2;
if (op3 > max) max = op3;
if (op4 > max) max = op4;

if (op2 < min) min = op2;
if (op3 < min) min = op3;
if (op4 < min) min = op4;

console.log("a + b * c =", op1);
console.log("a % b + c =", op2);
console.log("c + a / b =", op3);
console.log("a * b + c =", op4);
console.log("Maximum:", max);
console.log("Minimum:", min);
