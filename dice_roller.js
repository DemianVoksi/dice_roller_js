function howManyDice() {
  let numberOfDice = prompt("How many dice do you want to roll? ");
  return Number(numberOfDice);
}

function whichDie() {
  let dice = [4, 6, 8, 10, 12, 20, 100];
  let die = prompt(`Please enter the number of side you want your die to have. You can choose between ${dice}: `);
  return die;
}

function oneRoll(die) {
  let dieroll = Math.floor(Math.random() * die);
  if (dieroll == 0) {
    dieroll = dieroll + 1;
    return dieroll;
} else return dieroll;
}

function getArray(limit) {
  let diceArray = [];
  let i = 1;
  while (diceArray.push(i++) < limit);
  return diceArray;
}


console.log(getArray(howManyDice()))