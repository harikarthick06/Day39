// UC 1: Print table of powers of 2 up to 2^n
// Usage: node 01-powers-of-2.js 8

const n = Number(process.argv[2]);

for (let i = 0; i <= n; i++) {
  console.log(`2^${i} = ${Math.pow(2, i)}`);
}
