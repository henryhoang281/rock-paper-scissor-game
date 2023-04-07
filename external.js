const possibleChoices = document.querySelectorAll('button');
const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
const finalResultDisplay = document.getElementById('final-result');

let playerSelection;
let computerSelection;
let playRoundDisplay;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let computerScore = 0;
let playerScore = 0;

getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'scissor';
            break;
        case 2:
            computerSelection = 'paper';
            break;
    } 
    computerSelectionDisplay.innerHTML = computerSelection;
}

playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        playRoundDisplay = `Its a draw, ${playerSelection} same as ${computerSelection}`;
    }else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        playRoundDisplay = `You are win, ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        playRoundDisplay = `You are win, ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        playRoundDisplay = `You are win, ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        playRoundDisplay = `You are loose, ${computerSelection} beats ${playerSelection}`;
    } 
    resultDisplay.innerHTML = playRoundDisplay
}

countingScore = () => {
    computerScoreDisplay.innerHTML = computerScore;
    playerScoreDisplay.innerHTML = playerScore;
} 

announceWinner = () => {
    if (playerScore === 5) {
        finalResultDisplay.innerHTML = 'You are win';
    }
    if (computerScore === 5) {
        finalResultDisplay.innerHTML = 'You are loose';
    }
}


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection;
    getComputerChoice ();
    playRound(playerSelection, computerSelection);
    countingScore();
    announceWinner();
})) 
