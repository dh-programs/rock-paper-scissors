game();

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

// gets user & computer choice; determines winner
function playRound() {
    let pSel = getUserChoice();
    let cSel = getComputerChoice();
    if ( ((pSel === "rock") && (cSel === "scissors")) || ((pSel === "paper") && (cSel === "rock")) || ((pSel === "scissors") && (cSel === "paper")) ) {
        return "You win!";
    } else if (pSel === cSel) {
        return "It's a tie!";
    } else {
        return "You lose...";
    }
  }


// plays a 5 round game and returns the result
function game() {
    let roundResult;
    let userWins = 0;
    let computerWins = 0;
    for (let i=0; i < 5; i++) {
        roundResult = playRound();
        console.log(roundResult);
        if ( roundResult === "You win!" ) {
            userWins++;
        } else if ( roundResult === "You lose..." ) {
            computerWins++;
        }
        let j = i + 1; 
        console.log("Rounds played so far: " + j);
    }
    console.log("Rounds you won: " + userWins + "\nRounds the computer won: " + computerWins);
}