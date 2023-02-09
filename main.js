let playerText = promptChoice();
let playerSelection = "default";
playerSelection = getUserChoice(playerText);
let computerSelection = "default";
computerSelection = getComputerChoice();
let str = playRound(playerSelection, computerSelection);
console.log("Your choice: " + playerSelection + "\nComputer choice: " + computerSelection + "\n" + str);

// ******** next step ********
// create game() and call playRound() insdide of game(); play a 5 round game that keeps score & reports the winner and loser at the end


// obtains and returns the valid user choice
function getUserChoice(strChoice) {
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

// helper function for getUserChoice
// keep prompting user until valid choice obtained
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

// uses random to return computer choice
function getComputerChoice () {
    let numChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "default";
    if (numChoice === 1) {
        computerChoice = "rock";
    } else if (numChoice === 2) {
        computerChoice = "paper";
    } else { 
        computerChoice = "scissors"; 
    }
    return computerChoice;
}

// compares user and computer choice to determine winner
function playRound(pSel, cSel) {
    if ( ((pSel === "rock") && (cSel === "scissors")) || ((pSel === "paper") && (cSel === "rock")) || ((pSel === "scissors") && (cSel === "paper")) ) {
        return "You win!";
    } else if (pSel === cSel) {
        return "It's a tie!";
    } else {
        return "You lose...";
    }
  }

/* 
// rtn values from playRound: "You win!" "It's a tie!" "You lose..."
function game() {
    for (let i=0; i < 5; i++) {
        // CALL playRound() INSIDE OF THIS FUNCTION, COUNT ROUNDS
        // i already increments
        // need to keep track of scores & rounds
        // console.log() display results of each round
        // console.log() display winner at then end 
    }
}
*/