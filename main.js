// display the RUNNING SCORE
// announce winner once player reaches 5 points

const playerButtons = document.querySelectorAll('.player-choice');
playerButtons.forEach(button => button.addEventListener('click', playRound));
//playerButtons.forEach(button => button.addEventListener('click', runningScore));
// ^^ runs, but only shows computer winning
// each time playRound is called (each button click), 
// pass playRound return value into runningScore
// ** currently runningScore is being called at page load
// ** and not again when button is pressed
// ** should not be called UNTIL button is pressed
// ** and every subsequent click

const container = document.querySelector('#container');

const results = document.createElement('results');
results.classList.add('results');
// need to call runningScore and pass into textContent
results.textContent = 'This will eventually contain results';
container.appendChild(results);

function buttonToString(btnChoice) {
    if (btnChoice === "btn-rock") {
        return "rock";
    } else if (btnChoice === "btn-paper") {
        return "paper";
    } else if (btnChoice === "btn-scissors") {
        return "scissors";
    } else return;
}

// used in old version: obtains & returns valid user choice
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
function getComputerChoice() {
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
    //console.log("playRound has been called");
    let btnChoice = this.id;
    let pChoice = buttonToString(btnChoice);
    let cChoice = getComputerChoice();
    if ( ((pChoice === "rock") && (cChoice === "scissors")) || ((pChoice === "paper") && (cChoice === "rock")) || ((pChoice === "scissors") && (cChoice === "paper")) ) {
        console.log("You won");
        return "won";
    } else if (pChoice === cChoice) {
        console.log("Tie");
        return "tie";
    } else {
        console.log("Computer won");
        return "lost";
    }
  }

// get return value from playRound
// call this function & add results to div
// should this fnctn add results to a const variable OUTSIDE the function??
function runningScore() {
    //console.log("runningScore has been called");
    let userBtn = this.id;
    let roundResults = playRound(userBtn);
    //console.log(roundResults);
    let userWins = 0;
    let computerWins = 0;
    if (roundResults === "won") {
        userWins++;
        console.log(`user has won ${userWins} times`);
    } else if(roundResults === "lost") {
        computerWins++;
        console.log(`computer has won ${computerWins} times`)
    } 
}

// plays a 5 round game and displays the result
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