let noOfRounds = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameOver = false;

const computerChoices = ["Rock", "Paper", "Scissors"];

const bo3 = document.getElementById("bo3");
const bo5 = document.getElementById("bo5");
const bo7 = document.getElementById("bo7");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerSelectionText = document.getElementById("player-selection");
const computerSelectionText = document.getElementById("computer-selection");
const roundWinnerText = document.getElementById("round-winner");
const gameWinnerText = document.getElementById("game-winner");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

function checkGameWin(playerScore, computerScore, roundsRemaining){
  if((playerScore - computerScore) > noOfRounds / 2 || roundsRemaining === 0){
    if(playerScore > computerScore){
      gameWinnerText.textContent = "Game Winner : Player";
    }
    else{
      gameWinnerText.textContent = "Game Winner: Computer";
    }
  }
  gameWin = true;
}

function checkRoundWin(playerSelection, computerSelection, roundsRemaining) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    roundsRemaining -= 1;
    console.log(roundsRemaining);
    playerScore += 1;
    roundWinnerText.textContent = "Round Winner : Player";
    playerScoreText.textContent = `Player Score : ${playerScore}`;
    computerScoreText.textContent = `Computer Score : ${computerScore}`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    roundsRemaining -= 1;
    console.log(roundsRemaining);
    computerScore += 1;
    roundWinnerText.textContent = "Round Winner : Computer";
    playerScoreText.textContent = `Player Score : ${playerScore}`;
    computerScoreText.textContent = `Computer Score : ${computerScore}`;
  } else {
    console.log(roundsRemaining);
    roundWinnerText.textContent = "Round Winner : None";
    playerScoreText.textContent = `Player Score : ${playerScore}`;
    computerScoreText.textContent = `Computer Score : ${computerScore}`;
  }
  checkGameWin(playerScore, computerScore, roundsRemaining);
  return;
}

function playRound(roundsRemaining) {
  rock.onclick = () => {
    playerSelection = "Rock";
    computerSelection = computerChoices[Math.floor(Math.random() * 3)];
    playerSelectionText.textContent = `Player Selected : ${playerSelection} `;
    computerSelectionText.textContent = `Computer Selected : ${computerSelection}`;
    console.log(playerSelection, computerSelection);
    checkRoundWin(playerSelection, computerSelection, roundsRemaining);
  };
  paper.onclick = () => {
    playerSelection = "Paper";
    computerSelection = computerChoices[Math.floor(Math.random() * 3)];
    playerSelectionText.textContent = `Player Selected : ${playerSelection} `;
    computerSelectionText.textContent = `Computer Selected : ${computerSelection}`;
    console.log(playerSelection, computerSelection);
    checkRoundWin(playerSelection, computerSelection, roundsRemaining);
  };
  scissors.onclick = () => {
    playerSelection = "Scissors";
    computerSelection = computerChoices[Math.floor(Math.random() * 3)];
    playerSelectionText.textContent = `Player Selected : ${playerSelection} `;
    computerSelectionText.textContent = `Computer Selected : ${computerSelection}`;
    console.log(playerSelection, computerSelection);
    checkRoundWin(playerSelection, computerSelection, roundsRemaining);
  };
  if(gameOver === true){
    return;
  }
}

bo3.onclick = () => {
  noOfRounds = 3;
  bo3.disabled = true;
  bo5.disabled = true;
  bo7.disabled = true;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playRound(noOfRounds);
};

bo5.onclick = () => {
  noOfRounds = 5;
  bo3.disabled = true;
  bo5.disabled = true;
  bo7.disabled = true;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playRound(noOfRounds);
};

bo7.onclick = () => {
  noOfRounds = 7;
  bo3.disabled = true;
  bo5.disabled = true;
  bo7.disabled = true;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playRound(noOfRounds);
};
