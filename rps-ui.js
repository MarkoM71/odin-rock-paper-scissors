const playerChoiceDisplay = document.getElementById('human-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')
const finalResultDisplay = document.getElementById('final')
const playAgainDisplay = document.getElementById('again');
const possibleChoices = document.querySelectorAll('button');
let playerChoice
let computerChoice
let result

let humanScore = 0;
let computerScore = 0;

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        finalResultDisplay.innerHTML = " ";
        playAgainDisplay.innerHTML = " ";
        playerChoice = e.target.id
        playerChoiceDisplay.innerHTML = "You Selected: " + playerChoice
        getComputerChoice();
        getResult();
        getScore();
        getFinalResult();
    }))


    function getComputerChoice() {
        let selection = ["Rock", "Paper", "Scissors"];
        const randomChoice = selection[Math.floor(Math.random() * selection.length)];
        computerChoice = randomChoice;
        computerChoiceDisplay.innerHTML = "Computer Selected: " + computerChoice;
    }

    function getResult() {
        if ((playerChoice === "Rock") && (computerChoice === "Scissors")) {
            humanScore++;
            result = "You Win! Rock beats Scissors";
        }
        else if ((playerChoice === "Scissors") && (computerChoice === "Paper")) {
            humanScore++;
            result = "You Win! Scissors beats Paper";
        }
        else if ((playerChoice === "Paper") && (computerChoice === "Rock")) {
            humanScore++;
            result = "You Win! Paper beats Rock";
        }
        else if ((playerChoice === "Scissors") && (computerChoice === "Rock")) {
            computerScore++;
            result = "You Lose! Rock beats Scissors";
        }
        else if ((playerChoice === "Paper") && (computerChoice === "Scissors")) {
            computerScore++;
            result = "You Lose! Scissors beats Paper";
        }
        else if ((playerChoice === "Rock") && (computerChoice === "Paper")) {
            computerScore++;
            result = "You Lose! Paper beats Rock";
        }
        else {
            result = "It's A Tie";
        }
        resultDisplay.innerHTML = result;
    }

    function getScore() {
        scoreDisplay.innerHTML = "Human Score: " + humanScore + " Computer Score: " + computerScore;
    }

function getFinalResult() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalResultDisplay.innerHTML = "You Won The Game!";
        }
        else {
            finalResultDisplay.innerHTML = "You Lost The Game!"
        }
        humanScore = 0;
        computerScore = 0;
        playAgainDisplay.innerHTML = "Press Rock, Paper, or Scissors to begin playing again."
    }
}



