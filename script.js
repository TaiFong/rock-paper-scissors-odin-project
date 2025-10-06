
//let message = "Rock... Paper... Scissors!";

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

console.log(getComputerChoice());
