function formatChoice(playerChoice) {
    return playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function getComputerChoice() {
    let numChoice = (Math.random() * 10) % 3;
    
    /* Legend: 0 - Rock, 1 - Paper, 2 - Scissors */
    switch(Math.round(numChoice)) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
 
function playRound(playerSelection, computerSelection) {
    /*Indicates a draw */
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

function displayWinner(playerScore, computerScore) {
    console.log(`=====Final Scores=====
    Player: ${playerScore}
    Computer: ${computerScore}\n`);

    if (playerScore > computerScore) {
        console.log("Congratulations, you win!");
    }
    else if (playerScore < computerScore) {
        console.log("Sorry, you lose. Better luck next time!");
    }
    else {
        console.log("It's a draw!");
    }
}

function game(e) { 
    let playerSelection;
    let computerSelection;
    let roundVerdict;
    
    const playerChoice = e.target.getAttribute('class');
    playerSelection = formatChoice(playerChoice);
    computerSelection = getComputerChoice();
    roundVerdict = playRound(playerSelection, computerSelection);
    console.log(roundVerdict[0]);
    playerScore += roundVerdict[1];
    computerScore += roundVerdict[2];
    
}

let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", game));