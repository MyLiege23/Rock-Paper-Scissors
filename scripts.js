//Rock Paper Scizzors exercise!

/*
function playRPS () {
  let player = prompt("Rock, paper, or scissors?").toLowerCase();
  let npc = Math.floor(Math.random() * 3 + 1);
  switch (npc) {
    case 1: npc = "rock";
    break;
    case 2: npc = "paper";
    break;
    case 3: npc = "scissors";
    break;
    default: console.log("Error: npc gave random number not between 0 and 3 - correct function")
  }
  switch (true) {
    case (npc == player): alert("tie!");
    break;
    case (npc === "rock" && player === "paper"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "paper" && player === "scissors"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "scissors" && player === "rock"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "rock" && player === "scissors"): alert("npc played " + npc + ": you lose!");
    break;
    case (npc === "paper" && player === "rock"): alert("npc played " + npc + ": you lose!");
    break;
    case (npc === "scissors" && player === "paper"): alert("npc played " + npc + ": you lose!");
    break;
    default: alert("you may have misspelled rock, paper, or scissors");
  }
}
*/
/*
Above is my attempt at writing the single call rock paper scissors game without player from The Odin project. 
Below, I'll be following the instructions from The Odin Project for writing the same program. 
Note: above, I used the function playRPS() to run the game, with npc declaired within the function as a random number 
converted to a string for "rock", "paper", or "scissors", and the player's choice as "player".
Below, I'll be using the function rpsRound() with args "npc" and "player". This way, all code will be fresh.
below is the planning pseudocode 
*/

/*
function getComputerChoice:
  return string:
function getPlayerChoice:
  return string:
function whoWon(computerChoice, playerChoice):
  return number for score:

function playRPS(#):
  plays games # of times,
  sets playerChoice = getPlayerChoice();
  sets computerChoice = getComputerChoice();
  Prints choices:
  calls the function (whoWon?):
  outcome = whoWon(playerChoice, computerChoice);
  switch (outcome)
  */

//Second solution below===========================================
/*
let rpsOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rpsOptions[~~(Math.random() * rpsOptions.length)];
}

//The next function will have to be adapted with event listeners to fit in the webpage.

function getPlayerChoice() {
  return prompt("Rock, paper, or scissors?").toLowerCase();
}

function rpsWhoWon(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return 0;
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      return 1;
    } else if (playerChoice === "scissors") {
      return -1;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      return -1;
    } else if (playerChoice === "scissors") {
      return 1;
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      return 1;
    } else if (playerChoice === "paper") {
      return -1;
    }
  }
}

function playRPSOutOf(n) {
  let computerScore = 0;
  let playerScore = 0;
  while (computerScore + playerScore < n) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    let outcome = rpsWhoWon(computerChoice, playerChoice);
    switch (outcome) {
      case -1:
        console.log("Computer won!");
        computerScore++;
        break;
      case 1:
        console.log("Player won!");
        playerScore++;
        break;
      default:
        console.log("Tie!");
        break;
    }
  }
  let gameScore =
    "Player Score: " + playerScore + " \nComputer Score: " + computerScore;
  console.log(gameScore);
  return gameScore;
}
*/

//Third Solution Below ====================================

let rpsOptions = ["rock", "paper", "scissors"];
const outcomes = {
  playerWins: 1,
  tie: 0,
  computerWins: -1,
};

function getComputerChoice() {
  return rpsOptions[~~(Math.random() * rpsOptions.length)];
}

function getPlayerChoice() {
  return prompt("Rock, paper, or scissors?").toLowerCase();
}

function rpsWhoWon(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return outcomes.tie;
  } else if (computerChoice === "rock") {
    return playerChoice === "paper"
      ? outcomes.playerWins
      : outcomes.computerWins;
  } else if (computerChoice === "paper") {
    return playerChoice === "scissors"
      ? outcomes.playerWins
      : outcomes.computerWins;
  } else if (computerChoice === "scissors") {
    return playerChoice === "rock"
      ? outcomes.playerWins
      : outcomes.computerWins;
  }
}

function playRPSOutOf(n) {
  let computerScore = 0;
  let playerScore = 0;
  while (computerScore + playerScore < n) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    let score = rpsWhoWon(computerChoice, playerChoice);
    switch (score) {
      case outcomes.computerWins:
        console.log("Computer won!");
        computerScore++;
        break;
      case outcomes.playerWins:
        console.log("Player won!");
        playerScore++;
        break;
      case outcomes.tie:
        console.log("Tie!");
        break;
    }
  }
  let gameScore = `Player Score: ${playerScore}; 
    \nComputer Score: ${computerScore}; 
    \nGame Score: ${gameScore}.`;
  return gameScore;
}

/*

I overdid the ternary...

function rpsWhoWon(computerChoice, playerChoice) {
  return (computerChoice === playerChoice ? outcomes.tie
  : playerChoice === "paper" && computerChoice === "rock" ? outcomes.playerWins
  : playerChoice === "scissors" && computerChoice === "paper" ? outcomes.playerWins
  : playerChoice === "rock" && computerChoice === "scissors" ? outcomes.playerWins
  : playerChoice === "paper" && computerChoice === "scissors" ? outcomes.computerWins
  : playerChoice === "rock" && computerChoice === "paper" ? outcomes.computerWins
  : outcomes.computerWins);
}
*/
