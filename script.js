let noOfRounds = 0;

let playerSelection;
let computerSelection;
let roundWinner;
let gameWinner;
let computerWin = 0;
let playerWin = 0;

const gameSelectButtonGrid = document.getElementById('game-select-buttons-grid');
const gameGrid = document.getElementById('game-grid');
const roundWinnerDiv = document.getElementById('round-winner');
const playerAndComputerScoresDiv = document.getElementById('player-and-computer-scores');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const computerSelectionText = document.getElementById('computer-selection-text');
const playerSelectionText = document.getElementById('player-selection-text');
const roundWinnerText = document.getElementById('round-winner-text');
const gameWinnerText = document.getElementById('game-winner-text');
const continueGameBtn = document.getElementById('game-continue-button');
const newGameBtn = document.getElementById('new-game-button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
console.log(gameSelectButtonGrid);
console.log(gameGrid);

const computerPlay = () => {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * 3)];
};

function game(rounds){
  while(rounds !== 0){
    rockBtn.addEventListener('click', (event) => {
    console.log(event);
    playerSelection = 'rock';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    gameGrid.classList.toggle('visible');
    gameGrid.classList.toggle('invisible');
    playerAndComputerScoresDiv.classList.toggle('visible');
    playerAndComputerScoresDiv.classList.toggle('invisble');
    });
    
    paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    gameGrid.classList.toggle('visible');
    gameGrid.classList.toggle('invisible');
    playerAndComputerScoresDiv.classList.toggle('visible');
    playerAndComputerScoresDiv.classList.toggle('invisble');
    });
    
    scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    gameGrid.classList.toggle('visible');
    gameGrid.classList.toggle('invisible');
    playerAndComputerScoresDiv.classList.toggle('visible');
    playerAndComputerScoresDiv.classList.toggle('invisble');
    });

    playerSelectionText.innerText = `Player selected ${playerSelection}`;
    computerSelectionText.innerText = `Computer selected ${computerSelection}`;


    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
      roundWinner = 'Player';
      roundWinnerText.textContent = `The winner is ${roundWinner}`;
      playerWin += 1;
      playerScore.textContent = `Player Score: ${playerWin}`;
    }
    else{
      roundWinner = 'Computer';
      roundWinnerText.textContent = `The winner is ${roundWinner}`;
      playerWin += 1;
      playerScore.textContent = `Player Score: ${playerWin}`;
    }

    rounds -= 1;

    console.log(rounds);
  }
}

document.querySelector('#bo3').addEventListener('click', () => {
  noOfRounds = 3;
  console.log(noOfRounds);
  gameSelectButtonGrid.classList.toggle('visible');
  gameSelectButtonGrid.classList.toggle('invisible');
  gameGrid.classList.toggle('visible');
  gameGrid.classList.toggle('invisible');
  game(noOfRounds);
});

document.querySelector('#bo5').addEventListener('click', () => {
  noOfRounds = 5;
  console.log(noOfRounds);
  gameSelectButtonGrid.classList.toggle('visible');
  gameSelectButtonGrid.classList.toggle('invisible');
  gameGrid.classList.toggle('visible');
  gameGrid.classList.toggle('invisible');
  game(noOfRounds);
});

document.querySelector('#bo7').addEventListener('click', () => {
  noOfRounds = 7;
  console.log(noOfRounds);
  gameSelectButtonGrid.classList.toggle('visible');
  gameSelectButtonGrid.classList.toggle('invisible');
  gameGrid.classList.toggle('visible');
  gameGrid.classList.toggle('invisible');
  game(noOfRounds);
});






