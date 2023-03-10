const container = document.querySelector('#container');
let roundResults = document.createElement('div');
roundResults.classList.add('results-div');
container.appendChild(roundResults);

let gameResults = document.createElement('div');
gameResults.classList.add('results-div');
container.appendChild(gameResults);

let computerChoiceImg = document.querySelector('#computer-choice-img');
let userChoiceImg = document.querySelector('#user-choice-img');

function printScore(userScore, compScore) {
    roundResults.textContent = `You: ${userScore}, computer: ${compScore}`;
}

function printGameResult(gameResult) {
    gameResults.textContent = `${gameResult}`;
}

function clearGameResult() {
    gameResults.textContent = '';
}

function clearImg() {
    userChoiceImg.textContent = '';
    computerChoiceImg.textContent = '';
}

let rockSrc = 'images/crystals.png';
let paperSrc = 'images/parchment.png';
let scissorsSrc = 'images/scissors.png';
let rockImg = document.createElement('IMG');
rockImg.src = rockSrc;
let paperImg = document.createElement('IMG');
paperImg.src = paperSrc;
let scissorsImg = document.createElement('IMG');
scissorsImg.src = scissorsSrc;

let rockSrcUser = 'images/crystals-user.png';
let paperSrcUser = 'images/parchment-user.png';
let scissorsSrcUser = 'images/scissors-user.png';
let rockImgUser = document.createElement('IMG');
rockImgUser.src = rockSrcUser;
let paperImgUser = document.createElement('IMG');
paperImgUser.src = paperSrcUser;
let scissorsImgUser = document.createElement('IMG');
scissorsImgUser.src = scissorsSrcUser;

function displayUserChoice(userChoice) {
    if (userChoice === "rock") {
        userChoiceImg.append(rockImgUser);
    } else if (userChoice === "paper") {
        userChoiceImg.append(paperImgUser);
    } else if (userChoice === "scissors") {
        userChoiceImg.append(scissorsImgUser);
    }
}

function displayComputerChoice(computerChoice) {
    if(computerChoice === "rock") {
        computerChoiceImg.append(rockImg);
    } else if (computerChoice === "paper") {
        computerChoiceImg.append(paperImg);
    } else if (computerChoice === "scissors") {
        computerChoiceImg.append(scissorsImg);
    }
}

const playerBtn = document.querySelectorAll('.player-btn');
playerBtn.forEach(btn => btn.addEventListener('click', playRound));

function buttonToString(btnChoice) {
    btnString = btnChoice.split('-')[1];
    return btnString;
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

// used in old version: prompts user for a choice; converts to lowercase
function promptChoice() {
    let userText = (prompt("Type your choice here (rock, paper, or scissors)")).toLowerCase();
    return userText;
}

// used in old version: prompts until valid user choice obtained
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
        clearImg();
        displayUserChoice(pChoice);
        displayComputerChoice(cChoice);
        return gameObject;
    } else if (pChoice === cChoice) {
        gameResult = "tie";
        let gameObject = createGameObject(pChoice, cChoice, gameResult);
        runningScore(gameResult);
        clearImg();
        displayUserChoice(pChoice);
        displayComputerChoice(cChoice);
        return gameObject;
    } else if ( ((cChoice === "rock") && (pChoice === "scissors")) || ((cChoice === "paper") && (pChoice === "rock")) || ((cChoice === "scissors") && (pChoice === "paper")) ) {
        gameResult = "lost";
        let gameObject = createGameObject(pChoice, cChoice, gameResult);
        runningScore(gameResult);
        clearImg();
        displayUserChoice(pChoice);
        displayComputerChoice(cChoice);
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
        printGameResult("You won this game!");
        userWins = 0;
        computerWins = 0;
    } else if (computerWins === 5 && userWins < 5) {
        printScore(userWins, computerWins);
        printGameResult("The computer won this game.");
        userWins = 0;
        computerWins = 0;
    } else if (computerWins === 5 && userWins === 5) {
        printScore(userWins, computerWins);
        printGameResult("It's a tie.");
        userWins = 0;
        computerWins = 0;
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

// used in old version: plays a 5 round game and displays the result
function game() {
    let fiveRoundResult;
    let userWins = 0;
    let computerWins = 0;
    for (let i=0; i < 5; i++) {
        fiveRoundResult = playRound();
        console.log(fiveRoundResult);
        if ( fiveRoundResult === "You win!" ) {
            userWins++;
        } else if ( fiveRoundResult === "You lose..." ) {
            computerWins++;
        }
        let j = i + 1; 
        console.log("Rounds played so far: " + j);
    }
    console.log("Rounds you won: " + userWins + "\nRounds the computer won: " + computerWins);
}