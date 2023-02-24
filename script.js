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


/*
* requires: a case-insensitive string of rock, paper or scissor
* effects: returns one string containing rock, paper or scissor
*/
function playerSelection() {
    choice = prompt("Choose rock, paper or scissor:").trim().toLowerCase();
    return choice;
}

/*
* requires: nothing
* effects: returns one number in [0, 2] telling who won
* 0 - computer, 1 - player, 2 - tie
*/
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

/*
* requires: nothing
* effects: returns the winner in string form
*/
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

/*
* requires: nothing
* effects: returns the winner of the best of five game
*/
function playGame() {
    playerCount = 0;
    computerCount = 0;
    while (playerCount != 5 && computerCount != 5) {
        switch (playRound()) {
            case "computer":
                computerCount++;
                break;
            case "player":
                playerCount++;
                break;
            case "tie":
                break;
        }
        console.log("Player: " + playerCount + " points.");
        console.log("Computer: " + computerCount + " points.");


    }

    alert("Congratulations " + winner + " , you won!");
}

