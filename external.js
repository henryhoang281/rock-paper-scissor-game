let computerScore = 0;
let playerScore = 0;

getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

game = () => {
for (let i = 0; i < 5; i++) {
const computerSelection = getComputerChoice();
const playerSelection = prompt('Please select rock, paper or scissor: ');
playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Its a draw, ${playerSelection} same as ${computerSelection}`;
    }else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You are win, ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        return `You are win, ${playerSelection} beats ${computerSelection}`;
    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        return `You are win, ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You are loose, ${computerSelection} beats ${playerSelection}`;
    }
}
console.log(playRound(playerSelection, computerSelection));
}
}

getResult = (playerScore, computerScore) => {
    if (playerScore < computerScore) {
        return 'Computer win';
    } else if (playerScore > computerScore) {
        return 'Player win';
    } else {
        return 'Tie';
    } }

game();
console.log(getResult(playerScore, computerScore));
