let userInput
let computerChoice 
const choices = ['rock', 'paper', 'scissors']
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scisBtn = document.querySelector('.scissors')
const roundPara = document.querySelector('.round-result')
const userScorePara = document.querySelector('.user-score')
const computerScorePara = document.querySelector('.computer-score')
const matchPara = document.querySelector('.match-result')

const buttons = document.querySelectorAll('button')

const container = document.querySelector('.container')

let playAgain

let userScore
let computerScore

userScore=0
computerScore=0


function getUserInput (e) {
    userInput=e.target.textContent
};

function getComputerChoice() {
    let index = Math.floor(Math.random()*(choices.length))
    computerChoice = choices[index]
    console.log(computerChoice)
};

function compare() {
    if (computerChoice == userInput) {
        roundPara.textContent=`You chose ${userInput}, computer chose ${computerChoice}: it's a draw!`
        console.log(userScore)
        console.log(computerScore)
        userScorePara.textContent=`User score: ${userScore}`
        computerScorePara.textContent=`Computer score: ${computerScore}`
    } else if ((computerChoice == 'rock' && userInput == 'paper') || (computerChoice == 'paper' && userInput == 'scissors') || (computerChoice == 'scissors' && userInput == 'rock')) {
        userScore += 1
        roundPara.textContent=`You chose ${userInput}, computer chose ${computerChoice}: you win this round!`
        console.log(userScore)
        console.log(computerScore)
        userScorePara.textContent=`User score: ${userScore}`
        computerScorePara.textContent=`Computer score: ${computerScore}`
    } else {
        computerScore += 1
        roundPara.textContent=`You chose ${userInput}, computer chose ${computerChoice}: the computer wins this round!`
        console.log(userScore)
        console.log(computerScore)
        userScorePara.textContent=`User score: ${userScore}`
        computerScorePara.textContent=`Computer score: ${computerScore}`
    }
};

function playRound () {
    getComputerChoice()
    compare()
    if (computerScore==5) {
        matchPara.textContent=`Game over! Computer wins the match!`
        buttons.forEach((button) => button.disabled=true)
        playAgain=document.createElement('button')
        container.appendChild(playAgain)
        playAgain.textContent='Play again'
        playAgain.addEventListener('click', function (e) {
            computerScore=0
            userScore=0
            userScorePara.textContent=''
            computerScorePara.textContent=''
            roundPara.textContent=''
            matchPara.textContent=''
            container.removeChild(playAgain)
            buttons.forEach((button)=>button.disabled=false)
        });
    } else if (userScore==5) {
        matchPara.textContent=`Game over! Congratulations, you have won the match!`
        buttons.forEach((button) => button.disabled=true)
        playAgain=document.createElement('button')
        container.appendChild(playAgain)
        playAgain.textContent='Play again'
        playAgain.addEventListener('click', function (e) {
            computerScore=0
            userScore=0
            userScorePara.textContent=''
            computerScorePara.textContent=''
            roundPara.textContent=''
            matchPara.textContent=''
            container.removeChild(playAgain)
            buttons.forEach((button)=>button.disabled=false)
        });
    };
};


buttons.forEach((button) => button.addEventListener('click', getUserInput, true))
buttons.forEach((button) => button.addEventListener('click', playRound, true))
