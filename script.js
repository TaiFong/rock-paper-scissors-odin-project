
let message = "Rock... Paper... Scissors!";

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice(){
    const humanPrompt = window.prompt("What's your choice Human !?"); 
    return humanPrompt;
    
}

console.log(getHumanChoice());
console.log(getComputerChoice());
