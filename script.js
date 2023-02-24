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
    computerChoice = getComputerChoice();
    playerChoice = playerSelection();
    if ((computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissor") ||
    (computerChoice === "scissor" && playerChoice === "rock")) {
        return 1;
    } else if ((computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper") ||
    (computerChoice === "rock" && playerChoice === "scissor")) {
        return 0;
    } else {
        return 2;
    }
}

function playRound() {
    winner = "";
    switch (winnerCalculation()) {
        case 0:
            winner = "computer";
            break;
        case 1:
            winner = "player";
            break;
        case 2:
            winner = "tie!";
            break;
    }
    return winner;
}



// get player selection function
// get computer selection function
// tell who won
// count the points
// define the number of rounds played