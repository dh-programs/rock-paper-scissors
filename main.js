// create getComputerChoice: randomly selects rock, paper, or scissors
// this function will choose the computer's play
// console.log() computer choice before moving onto next step

// create function to play a single round: takes 2 parameters (playerSelection & computerSelection)
// returns a string that declares the results of the match & why (ie, rock beats scissors)
// return game results

// create game() and call playRound() insdide of game(); play a 5 round game that keeps score & reports the winner and loser at the end

let playerText = prompt("Type your choice here");
let playerSelection = "default";
validateInput(playerText);

// ************* NEXT STEPS *************
// if not, prompt again stating the desired input
// when correct input received, save playerText to playerSelection variable

// validateInput converts case of user input, sets playerSelection to
// the input if it's one of the three valid choices
function validateInput(playerText) {
    let testText = playerText.toLowerCase();
    if ( testText === "rock" || testText === "paper" || testText === "scissors") {
        playerSelection = testText;
        return playerSelection;
    } else {
        return false;
    }
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