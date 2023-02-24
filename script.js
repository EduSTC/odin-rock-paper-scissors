// welcome to the game
console.log("Welcome to the Rocker, Paper and Scissors game!");



/*
* requires: nothing
* effects: returns one string containing rock, paper or scissor
*/
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
    }
    return choice;
}


function playerSelection() {
    choice = prompt("Choose rock, paper or scissor:").trim().toLowerCase();
    return choice;
}

function winnerCalculation() {
    if ((getComputerChoice() === "rock" && playerSelection() === "paper") ||
    (getComputerChoice() === "paper" && playerSelection() === "scissor") ||
    (getComputerChoice() === "scissor" && playerSelection() === "rock")) {
        return 1;
    } else if ((getComputerChoice() === "paper" && playerSelection() === "rock") ||
    (getComputerChoice() === "scissor" && playerSelection() === "paper") ||
    (getComputerChoice() === "rock" && playerSelection() === "scissor")) {
        return 0;
    } else {
        return 2;
    }
}

function playRound() {

}



// get player selection function
// get computer selection function
// tell who won
// count the points
// define the number of rounds played