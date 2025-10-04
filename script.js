
//let message = "Rock... Paper... Scissors!";

let computerScore = 0;
let humanScore = 0;
const options = ["apple", "banana", "cherry"];
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  // your code here!
  // for loop will increment by 1 then print result 
   if (humanChoice > computerChoice, choice++){
    console.log(humanChoice);
  }
}else if (computerChoice > humanChoice, computerChoice++){

}
playRound(humanSelection, computerSelection);
//getHumanChoice(message);
console.log(humanScore, computerScore);
console.log(getComputerChoice(3))
