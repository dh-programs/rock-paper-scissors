// create getComputerChoice: randomly selects rock, paper, or scissors
// this function will choose the computer's play
// console.log() computer choice before moving onto next step

// create function to play a single round: takes 2 parameters (playerSelection & computerSelection)
// returns a string that declares the results of the match & why (ie, rock beats scissors)
// return game results

// create game() and call playRound() insdide of game(); play a 5 round game that keeps score & reports the winner and loser at the end

let playerText = promptChoice();
let playerSelection = "default";
playerSelection = validateChoice(playerText);
let computerChoice = "default";
// computerChoice = getComputerChoice();
// game(computerChoice, playerSelection);

// obtains and returns the valid user choice
function validateChoice(strChoice) {
    if ( strChoice === "rock" || strChoice === "paper" || strChoice === "scissors") {
        playerSelection = strChoice;
        return playerSelection;
    } else {
        finalChoice = getValidChoice();
        playerSelection = finalChoice;
        return playerSelection;
    }
}

// prompts user for a choice; converts to lowercase
function promptChoice() {
    let userText = (prompt("Type your choice here (rock, paper, or scissors)")).toLowerCase();
    return userText;
}

// helper function for validateChoice
// if first choice is not valid
// continues to prompt until valid choice obtained
function getValidChoice() {
    let validChoice = false;
    while(!validChoice) {
        strChoice = promptChoice();
        if (strChoice === "rock" || strChoice === "paper" || strChoice === "scissors") {
            validChoice = true;
        }
    }
    return strChoice;
}

/* function getComputerChoice () {
    // use random to select 1 of 3 choices
    //
} */

/* function game() {
    for (let i=0; i < 5; i++) {
        // CALL playRound() INSIDE OF THIS FUNCTION, COUNT ROUNDS
        // i already increments
        // need to keep track of scores & rounds
        // console.log() display results of each round
        // console.log() display winner at then end 
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    // if statements saying which choice wins
  }
   
  //const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/