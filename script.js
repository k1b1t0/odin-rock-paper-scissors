const CHOICES = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let round = 0;
let endgame = 0;

const buttons = document.querySelectorAll("button")
const resultDiv = document.querySelector("#result")

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        if (!endgame) {
            playRound(event.target.id, getComputerChoice())
        }
    })
}

function getComputerChoice() {
    let index = Math.round(Math.random() * 2);
    return CHOICES.at(index);
}

function getHumanChoice() {
    return prompt('rock/paper/scissors: ').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result = document.createElement("p")

    if (!CHOICES.includes(humanChoice)) {
        console.log('Invalid input! Please try again!');
        return;
    }
    if (humanChoice === computerChoice) {
        result.textContent = 'Draw! No one scores!'
        round--;
    } else if (humanChoice === `rock` && computerChoice === `scissors`) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++
    } else {
        result.textContent = `You lost! ${computerChoice} beats ${humanChoice}`
        computerScore++
    }
    round++;
    
    let playerResult = document.createElement("p")
    let computerResult = document.createElement("p")
    playerResult.textContent = `Your score: ${humanScore}`
    computerResult.textContent = `Computer's score: ${computerScore}`

    resultDiv.replaceChildren(result, playerResult, computerResult)

    if (humanScore === 5 || computerScore === 5) {
        winnerAnnounce(humanScore === 5)
    }
}

function winnerAnnounce(human) {
    let announcement = document.createElement("h1")
    if (human) {
        announcement.textContent = 'You are the WINNER!'
    } else {
        announcement.textContent = 'You are the LOSER!'
    }
    endgame++
    resultDiv.appendChild(announcement)
}

