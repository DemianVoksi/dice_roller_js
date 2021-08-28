function howManyDice() {
  /* Prompts the user to enter the number of dies to roll. */

  let numberOfDice = prompt("How many dice do you want to roll? ");
  return Number(numberOfDice);
}

function whichDie() {
  /* Prompts the user to enter the type of die to roll. */
  
  let dice = [4, 6, 8, 10, 12, 20, 100];
  let die = 0;
  do {
    die = prompt(`Please enter the number of side you want your die to have. You can choose between ${dice}: `);
    die = Number(die);
  } while (dice.includes(die) == false);
  return die;
  }

function oneRoll(die) {
  // Calls whichDie() to return a random number between 1 and whichDie()

  let chosenDie = die + 1; // Adds 1 to the chosen die, so the roll can cover the whole spectrum
  let dieroll = Math.floor(Math.random() * chosenDie);
  if (dieroll == 0) {
    dieroll = dieroll + 1; // original roll returns 0, which doesn't exist in the d20 system
    return dieroll;
} else return dieroll;
}

function getArray(limit) {
  /* Calls on howManyDice() in order to get an iterable array 
  in the length of the number of dice to throw, for later iteration */
  
  let diceArray = [];
  let i = 1;
  while (diceArray.push(i++) < limit);
  return diceArray;
}

function doRoll() {
  /* Calls on getArray() to create an array of the times needed to
  roll the dice. Appends the results of a roll into the results array
  nd returns them. */
  
  let diceArr = getArray(howManyDice());
  let results = [];
  diceArr.forEach(function(i) {
    results.push(oneRoll(whichDie()));
  });
  return results
}

function rollAgain() {
  /* Initiates the roll procedure and 
  gives option to roll again. 
  Calls on doRoll() */
  
  alert(doRoll())
  while(true) {
    let question = prompt("Roll again, 'y' or 'n'? ");
    if (question == 'n') {
      alert("Ok, we're done.");
      break
    } else if (question == 'y') {
      alert("Let's go again!"); // add function to roll again
      alert(doRoll())
    } else {
      continue
    }
  }
}

console.log(rollAgain())