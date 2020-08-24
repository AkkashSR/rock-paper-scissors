const noOfRounds = parseInt(prompt("Enter the number of round to be played: "));

let playerSelection;
let computerSelection;
let roundWinner;
let gameWinner;
let computerWin = 0;
let playerWin = 0;

const computerPlay = () => {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * 3)];
};

const game = (roundNo) => {
  while (roundNo !== 0) {
    playerSelection = prompt(
      "Enter your choice. Rock, Paper or Scissors?"
    ).toLowerCase();
		computerSelection = computerPlay();
		alert(`Computer picked ${computerSelection}`);
    if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      roundWinner = "Computer";
      computerWin += 1;
		} else if( computerSelection === playerSelection){
			roundWinner = 'No one. It is a draw'
		}
		else {
      roundWinner = "Player";
      playerWin += 1;
    }
		alert(`The round winner is ${roundWinner}`);
		roundNo -= 1;
	}
	if (computerWin === playerWin){
		alert(`The game is a draw. Player Won ${playerWin} rounds and so did the computer`)
	}
  else if (computerWin > playerWin) {
    gameWinner = "Computer";
    alert(`The game winner is ${gameWinner}.They won ${computerWin} rounds`);
  } else {
    gameWinner = "Player";
    alert(`The game winner is ${gameWinner}.They won ${playerWin} rounds`);
	}
};

game(noOfRounds);
location.reload();


