/*Pseudocode
1. Obtain input from the user (i.e. RPS)
2. Let the computer select between RPS
3. Compare the Player and Computer's selections
4. Display the score.
*/

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