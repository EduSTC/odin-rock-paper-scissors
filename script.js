
let playerCount = parseInt(document.getElementById('player-score').textContent);
let computerCount = parseInt(document.getElementById('computer-score').textContent);

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
    button.addEventListener('click', function game() {
        if (!(playerCount >= 5 || computerCount >= 5)) {
            playGame(button.value);
        }
    });
 });



playAgainButton = document.getElementById('play-again');
playAgainButton.addEventListener('click', () => {
    location.reload();
})


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "fire";
            break;
        case 1:
            choice = "water";
            break;
        case 2:
            choice = "ice";
    }
    return choice;
}




function playRound(playerChoice) {
    computerChoice = getComputerChoice();
    if ((computerChoice === "fire" && playerChoice === "water") ||
    (computerChoice === "water" && playerChoice === "ice") ||
    (computerChoice === "ice" && playerChoice === "fire")) {
        return "player";
    } else if ((computerChoice === "water" && playerChoice === "fire") ||
    (computerChoice === "ice" && playerChoice === "water") ||
    (computerChoice === "fire" && playerChoice === "ice")) {
        return "computer";
    } else {
        return "tie";
    }
}


function playGame(playerChoice) {
    switch (playRound(playerChoice)) {
        case "computer":
            computerCount++;
            break;
        case "player":
            playerCount++;
            break;
        case "tie":
            break;
    }
    document.getElementById('computer-score').textContent = computerCount.toString();
    document.getElementById('player-score').textContent = playerCount.toString();

    resultText = document.querySelector('#result > h2');
    if (playerCount == 5) {
        resultText.style.cssText = 'color: #81fc81';
        resultText.textContent = "Player Wins!"
    } else if (computerCount == 5) {
        document.querySelector('#result > h2').textContent = "Computer Wins!!!";
    }
}



