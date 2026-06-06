// UC 2: Print nth harmonic number
// Usage: node 02-harmonic-number.js 5

const n = Number(process.argv[2]);
let harmonic = 0;

for (let i = 1; i <= n; i++) {
  harmonic += 1 / i;
}

console.log(`${n}th Harmonic Number = ${harmonic}`);
