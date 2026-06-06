// UC 4: Gambler starts with Rs 100 and bets Re 1 until broke or reaches Rs 200
let stake = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
  bets++;
  const bet = Math.floor(Math.random() * 2);

  if (bet === 1) {
    stake++;
    wins++;
  } else {
    stake--;
  }
}

console.log("Final Stake:", stake);
console.log("Total Bets:", bets);
console.log("Total Wins:", wins);
console.log(stake === goal ? "Gambler reached the goal" : "Gambler went broke");
