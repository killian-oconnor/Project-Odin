let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;


// let buttons = document.querySelectorAll(".button");
// buttons.forEach((button) => { button.addEventListener("click", playerPlay(this)); } )

let rockButton = document.getElementById("rockBtn");
rockButton.addEventListener("click", playRound);

let paperButton = document.getElementById("paperBtn");
paperButton.addEventListener("click", playRound);

let scissorsButton = document.getElementById("scissorsBtn");
scissorsButton.addEventListener("click", playRound);

const playerScoreboard = document.querySelector('#userScore');
const computerScoreboard = document.querySelector('#computerScore');
const roundsScoreboard = document.querySelector('#roundsPlayed');
const commentaryBox = document.querySelector('#commentary');


// random number generator function taken from SO
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function computerPlay() {
    switch(getRandomInt(1,4)) {
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

function playerPlay(button) {
    //   while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
    //     console.log("Please input selection. Player will be prompted until a valid selection is made :)")
    //     playerSelection = prompt().toUpperCase();
    //   }
      
    // buttons.forEach((button) => {
    //     button.addEventListener("click", () => {
    //       playerSelection = button.value.toUpperCase();
    //     })
    // });

    playerSelection = button.value.toUpperCase();
}

function playRound() {

    console.log("This variable contains:")
    console.log(this);
    playerSelection = this.value;
    computerPlay();

    console.log(`Player selected ${playerSelection} and Computer selected ${computerSelection}`);
    commentaryBox.textContent = `Player selected ${playerSelection} and Computer selected ${computerSelection}`;

    if (playerSelection === computerSelection) {
        console.log("Round is a draw");
        setTimeout(() => {  commentaryBox.textContent = "Round is a draw"; }, 2000);
        //commentaryBox.textContent = "Round is a draw";
        roundCounter++;
    }
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        console.log("Sorry, computer wins this round :(");
        setTimeout(() => {  commentaryBox.textContent = "Sorry, computer wins this round :("; }, 2000);
        //commentaryBox.textContent = "Sorry, computer wins this round :(";
        computerScore++;
        roundCounter++;
    }
    else {
        console.log("Whataplaya! Player wins the round :)");
        setTimeout(() => {  commentaryBox.textContent = "Whataplaya! Player wins the round :)"; }, 2000);
        //commentaryBox.textContent = "Whataplaya! Player wins the round :)";
        playerScore++;
        roundCounter++;
    }

    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    roundsScoreboard.textContent = roundCounter;

    //After round - set selections back to blank
    playerSelection = "";
    computerSelection = "";

    if (playerScore > 4) {
        alert("Congrats Playa! You're a winner this time");
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
        roundsScoreboard.textContent = roundCounter;
    }
    else if (computerScore > 4) {
        alert("UNLUCKEEEEE! You lose");
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
        roundsScoreboard.textContent = roundCounter;
    }
}

function game() {
    do {
        playRound();
        playerSelection = "";
        computerSelection = "";
        console.log(`Current score is: PLAYER ${playerScore} | COMPUTER ${computerScore}`)
        //added to update gui with scores
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
        roundsScoreboard.textContent = roundCounter;
      } while (roundCounter < 6);
}

// game();

// if (playerScore > computerScore) {
//     console.log("Congrats Playa! You're a winner this time")
// }
// else if (playerScore < computerScore) {
//     console.log("UNLUCKEEEEE! You lose")
// }
// else {
//     console.log("It's a frickin draw y'all. How dissapointing :(")
// }


// playerScore = 0;
// computerScore = 0;
// roundCounter = 0;

  

// const playerScoreboard = document.querySelector('#userScore');
// const computerScoreboard = document.querySelector('#computerScore');
// const roundsScoreboard = document.querySelector('#roundsPlayed');

// playerScoreboard.textContent = playerScore;
// computerScoreboard.textContent = computerScore;
// roundsScoreboard.textContent = roundCounter;