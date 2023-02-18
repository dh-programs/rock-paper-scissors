// announce winner once player or computer reaches 5 points
// then clear pscore & cscore and start the count over

const container = document.querySelector('#container');
let results = document.createElement('div');
results.classList.add('div');
container.appendChild(results);

function setTextContent(userScore, compScore) {
    results.textContent = `Your wins: ${userScore}, computer wins: ${compScore}`;
}

const playerBtn = document.querySelectorAll('.player-btn');
playerBtn.forEach(btn => btn.addEventListener('click', playRound));

// then print to div the winner at the end
// then clear the win/loss announcement
// score should already be reset
/*const container = document.querySelector('#container');
function appendResults(gameRes) {
    let results = document.createElement('results');
    results.classList.add('results');
    results.textContent = ` ${gameRes} `;
    container.appendChild(results);
}*/

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
        setTextContent(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        //appendResults('You reached 5 points first; you won!!');
    } else if (computerWins === 5 && userWins < 5) {
        setTextContent(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        //appendResults('You lost this game.');
    } else if (computerWins === 5 && userWins === 5) {
        setTextContent(userWins, computerWins);
        userWins = 0;
        computerWins = 0;
        //appendResults('This game was a tie.');
    } else if (userWins < 5 && computerWins < 5) {
        if (roundResult === "won") {
            userWins++;
            setTextContent(userWins, computerWins);
            //appendResults(roundResult);
        } else if (roundResult === "lost") {
            computerWins++;
            setTextContent(userWins, computerWins);
            //appendResults(roundResult);
        } else if (roundResult === "tie") {
            setTextContent(userWins, computerWins);
            //appendResults(roundResult);
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