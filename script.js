const CHOICES = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let round = 0;


function getComputerChoice() {
    let index = Math.round(Math.random() * 2);
    return CHOICES.at(index);
}

function getHumanChoice() {
    return prompt('rock/paper/scissors: ').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (!CHOICES.includes(humanChoice)) {
        console.log('Invalid input! Please try again!');
        return;
    }
    if (humanChoice === computerChoice) {
        console.log('Draw! No one scores!');
        round--;
    } else if (humanChoice === `rock` && computerChoice === `scissors`) {
        win(humanChoice, computerChoice)
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        win(humanChoice, computerChoice)
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        win(humanChoice, computerChoice)
    } else {
        lose(humanChoice, computerChoice)
    }
    round++;
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
}

function win(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
}

function lose(humanChoice, computerChoice) {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
}

while (round != 5) {
    playRound(getHumanChoice(), getComputerChoice());
}


