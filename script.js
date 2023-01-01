let options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}

function winner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //make a key thats shows both players choices
    let key = options.indexOf(playerSelection) + '' + options.indexOf(computerSelection);
    switch (key) {
        case '00':
        case '11':
        case '22':
            return `Draw! both players chose ${playerSelection}.`;
            break;
        case '02':
        case '10':
        case '21':
            return `You Won! ${playerSelection} beats ${computerSelection}.`;
            break;
        default:
            return `You Lost :(! ${computerSelection} beats ${playerSelection}.`;
            break;
    }
}
