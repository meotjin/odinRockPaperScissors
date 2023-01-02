let options = ["rock", "paper", "scissors"];

let userScore = 0,
	computerScore = 0;

function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	return options[randomNum];
}

function winner(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	//make a key thats shows both players choices
	let key =
		options.indexOf(playerSelection) + "" + options.indexOf(computerSelection);
	switch (key) {
		case "00":
		case "11":
		case "22":
			return `Draw! both players chose ${playerSelection}.`;
		case "02":
		case "10":
		case "21":
			userScore++;
			return `You Won! ${playerSelection} beats ${computerSelection}.`;
		default:
			computerScore++;
			return `You Lost :(! ${computerSelection} beats ${playerSelection}.`;
	}
}

function game() {
	console.log(`user score: ${userScore}\ncomputer score: ${computerScore}`);
	console.log(
		userScore > computerScore
			? "you won! congrats!"
			: userScore < computerScore
			? "you lost :( try again!"
			: "Draw!"
	);
}

game();
