// add another div that shows the computer choice
// each round and displays the correct image

const container = document.querySelector('#container');
let roundResults = document.createElement('div');
roundResults.classList.add('div');
container.appendChild(roundResults);

let gameResults = document.createElement('div');
gameResults.classList.add('div');
container.appendChild(gameResults);

function printScore(userScore, compScore) {
    roundResults.textContent = `You: ${userScore}, computer: ${compScore}`;
}

function printGameResult(gameResult) {
    gameResults.textContent = `${gameResult}`;
}

function clearGameResult() {
    gameResults.textContent = '';
}

// need to create "clearChoiceImg"
// should clear the question mark icon
// need to create "displayChoiceImg"
// should display the user & computer choice
// in the same div that ? are currently displayed

const playerBtn = document.querySelectorAll('.player-btn');
playerBtn.forEach(btn => btn.addEventListener('click', playRound));

function buttonToString(btnChoice) {
    // instead: strip "btn-" from btnChoice
    // and return that
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

// gets user & computer choice; determines winner of round
function playRound() {
    let pChoice = buttonToString(this.id);
    let cChoice = getComputerChoice();
    let gameResult = "ERROR";
    if ( ((pChoice === "rock") && (cChoice === "scissors")) || ((pChoice === "paper") && (cChoice === "rock")) || ((pChoice === "scissors") && (cChoice === "paper")) ) {
        gameResult = "won";
        let gameObject = createGameObject(pChoice, cChoice, gameResult);
        runningScore(gameResult);
        return gameObject;
    } else if (pChoice === cChoice) {
        gameResult = "tie";
        let gameObject = createGameObject(pChoice, cChoice, gameResult);
        runningScore(gameResult);
        return gameObject;
    } else if ( ((cChoice === "rock") && (pChoice === "scissors")) || ((cChoice === "paper") && (pChoice === "rock")) || ((cChoice === "scissors") && (pChoice === "paper")) ) {
        gameResult = "lost";
        let gameObject = createGameObject(pChoice, cChoice, gameResult);
        runningScore(gameResult);
        return gameObject;
    } else return gameResult;
  }


function createGameObject(pChoice, cChoice, gameResult) {
    let gameObject = {
        pChoice: pChoice,
        cChoice: cChoice,
        gameResult: gameResult
    }
    return gameObject;
}

let userWins = 0;
let computerWins = 0;
function runningScore(roundResult) {
    if (userWins === 5 && computerWins < 5) {
        printScore(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        printGameResult("You won this game!");
    } else if (computerWins === 5 && userWins < 5) {
        printScore(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        printGameResult("The computer won this game.");
    } else if (computerWins === 5 && userWins === 5) {
        printScore(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        printGameResult("It's a tie.");
    } else if (userWins < 5 && computerWins < 5) {
        if (roundResult === "won") {
            userWins++;
            printScore(userWins, computerWins);
            clearGameResult();
        } else if (roundResult === "lost") {
            computerWins++;
            printScore(userWins, computerWins);
            clearGameResult();
        } else if (roundResult === "tie") {
            printScore(userWins, computerWins);
            clearGameResult();
        }
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