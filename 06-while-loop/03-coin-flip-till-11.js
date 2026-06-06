// UC 3: Flip coin until Heads or Tails wins 11 times
let heads = 0;
let tails = 0;

while (heads < 11 && tails < 11) {
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    heads++;
  } else {
    tails++;
  }
}

console.log("Heads count:", heads);
console.log("Tails count:", tails);
console.log(heads === 11 ? "Heads won" : "Tails won");
