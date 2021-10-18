let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function computerPlay() {
    switch(getRandomInt(1,3)) {
        case 1:
            computerSelection = "ROCK";
          break;
        case 2:
            computerSelection = "PAPER";
          break;
        default:
            computerSelection = "SCISSORS";
      } 
    console.log("Computer Selection is: " + computerSelection)
    }

function playerPlay() {
      while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
        console.log("Please input selection. Player will be prompted until a valid selection is made :)")
        playerSelection = prompt().toUpperCase();
      }      
    }

function playRound() {

    playerPlay();
    computerPlay();

    console.log(`Player selected ${playerSelection} and Computer selected ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("Round is a draw");
        roundCounter++;
    }
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        console.log("Sorry, computer wins this round :(");
        computerScore++;
        roundCounter++;
    }
    else {
        console.log("Whataplaya! Player wins the round :)");
        playerScore++;
        roundCounter++;
    }
}

function game() {
    do {
        playRound();
        playerSelection = "";
        computerSelection = "";
        console.log(`Current score is: PLAYER ${playerScore} | COMPUTER ${computerScore}`)
      } while (roundCounter < 6);
}

game();

if (playerScore > computerScore) {
    console.log("Congrats Playa! You're a winner this time")
}
else if (playerScore < computerScore) {
    console.log("UNLUCKEEEEE! You lose")
}
else {
    console.log("It's a frickin draw y'all. How dissapointing :(")
}

  