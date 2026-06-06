// UC 1: Print powers of 2 up to 2^n until 256 is reached
// Usage: node 01-powers-of-2-till-256.js 10

const n = Number(process.argv[2]);
let i = 0;
let power = 1;

while (i <= n && power <= 256) {
  console.log(`2^${i} = ${power}`);
  i++;
  power = Math.pow(2, i);
}
