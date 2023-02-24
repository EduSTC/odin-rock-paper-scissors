// welcome to the game
console.log("Welcome to the Rocker, Paper and Scissors game!");



// get computer choice function
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

console.log(getComputerChoice());
// function to generate a random number
// function to associate the number to the object

// get player selection function
// get computer selection function
// tell who won
// count the points
// define the number of rounds played