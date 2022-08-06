function game(e) { 
    //IDs for buttons are either "rock", "paper" or "scissors"
    const playerChoice = e.target.getAttribute('id');
    let playerSelection = formatPlayerChoice(playerChoice);

    let computerSelection = getComputerChoice();

    const roundVerdict = chooseRoundWinner(playerSelection, computerSelection);

<<<<<<< HEAD
    let message = document.querySelector(".message");
    message.textContent = roundVerdict[0];

=======
    console.log(roundVerdict[0]);
>>>>>>> parent of 787a3c3 (Display status on-screen instead of the console)
    playerScore += roundVerdict[1];
    computerScore += roundVerdict[2];
    alterDisplayedScore(playerScore, computerScore);
    
    if (playerScore >= 5 || computerScore >= 5) {
        displayWinner(playerScore, computerScore);
        return;
    }
}

function formatPlayerChoice(playerChoice) {
    return playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function getComputerChoice() {
    let numChoice = (Math.random() * 10) % 3;
    
    // Legend: 0 - Rock, 1 - Paper, 2 - Scissors 
    switch(Math.round(numChoice)) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
 
function chooseRoundWinner(playerSelection, computerSelection) {
    //Indicates a draw
    if (playerSelection === computerSelection) {
        return [`It's a draw! ${playerSelection} cannot beat itself.`, 0, 0]
    }

    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                return [`You win! ${playerSelection} beats ${computerSelection}.`, 1, 0];
            }
            else {
                return [`You lose! ${computerSelection} beats ${playerSelection}.`, 0, 1];
            }
        case "Paper":
            if (computerSelection === "Rock") {
                return [`You win! ${playerSelection} beats ${computerSelection}.`, 1, 0];
            }
            else {
                return [`You lose! ${computerSelection} beats ${playerSelection}.`, 0, 1];
            }
        default:
            if (computerSelection === "Paper") {
                return [`You win! ${playerSelection} beats ${computerSelection}.`, 1, 0];
            }
            else {
                return [`You lose! ${computerSelection} beats ${playerSelection}.`, 0, 1];
            }
    }
}

function alterDisplayedScore(playerScore, computerScore) {
    let pScore = document.querySelector(".player-score");
    let cScore = document.querySelector(".comp-score");

    pScore.textContent = "Player: " + playerScore;
    cScore.textContent = "Computer: " + computerScore;
}

function displayWinner(playerScore, computerScore) {
<<<<<<< HEAD
    let message = document.querySelector(".message");
    let string;
=======
    console.log(`=====Final Scores=====
    Player: ${playerScore}
    Computer: ${computerScore}\n`);
>>>>>>> parent of 787a3c3 (Display status on-screen instead of the console)

    if (playerScore > computerScore) {
        console.log("Congratulations, you win!");
    }
    else if (playerScore < computerScore) {
        console.log("Sorry, you lose. Better luck next time!");
    }
    else {
        console.log("It's a draw!");
    }

    displayRestartButton();
}

function displayRestartButton() {
    buttonsRps.forEach(button => button.disabled = true);
    restart.disabled = false;
    restart.addEventListener("click", resetGame);
}

function resetGame() {
    playerScore = 0; 
    computerScore = 0;
    alterDisplayedScore(playerScore, computerScore);

<<<<<<< HEAD
    let message = document.querySelector(".message");
    message.textContent = "";

=======
>>>>>>> parent of 787a3c3 (Display status on-screen instead of the console)
    restart.disabled = true;
    buttonsRps.forEach(button => button.disabled = false);
}

//Initialize scores and button states in the game
let playerScore = 0;
let computerScore = 0;
alterDisplayedScore(playerScore, computerScore);

const buttonsRps = Array.from(document.querySelectorAll(".options"));
buttonsRps.forEach(button => button.addEventListener("click", game));

const restart = document.querySelector(".restart");
restart.disabled = true;