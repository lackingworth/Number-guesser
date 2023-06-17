let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  if ((Math.abs(secretTarget - humanGuess)) <= (Math.abs(secretTarget - computerGuess))) {
    return true;
  } else {
      return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') { 
    humanScore ++;
   } else if (winner === 'computer') {
      computerScore ++;
  }
}

function advanceRound() {
  currentRoundNumber ++;
}

console.log(compareGuesses(1,1,5));