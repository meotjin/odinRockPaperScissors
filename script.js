let options = ["rock", "paper", "scissor"];

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

function playRound(playerSelection) {
	alert(winner(playerSelection, getComputerChoice()));
	const playerScore = document.querySelector("#player-score");
	const comScore = document.querySelector("#computer-score");
	playerScore.textContent = userScore;
	comScore.textContent = computerScore;

	if (userScore == 5 || computerScore == 5) {
		alert(
			userScore > computerScore
				? "you won! congrats!"
				: userScore < computerScore
				? "you lost :( try again!"
				: "Draw!"
		);
	}
}

const container = document.querySelector("#player-buttons");
const buttons = container.querySelectorAll(".player-button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.textContent);
		console.log("button clicked");
	});
});
