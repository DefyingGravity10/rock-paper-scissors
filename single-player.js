/*Pseudocode
1. Obtain input from the user (i.e. RPS)
2. Let the computer select between RPS
3. Compare the Player and Computer's selections
4. Display the score.
*/

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
    if (playerSelection === computerSelection) {
        return `It's a draw! ${playerSelection} cannot beat itself.`
    }

    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            }
            else {
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            }
        case "Paper":
            if (computerSelection === "Rock") {
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            }
            else {
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            }
        default: 
            if (computerSelection === "Paper") {
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            }
            else {
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            }
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    for (let i=0; i<5; i++) {
        do {
            playerSelection = formatChoice(prompt("Rock, Paper, or Scissors? "));
        } while(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors")
        
        computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();