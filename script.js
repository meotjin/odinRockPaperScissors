let options = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}
