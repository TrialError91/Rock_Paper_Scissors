let userChoice
let getUserChoice = function() {
    return prompt("Insert your choice here. Enter a valid input")
};
function checkUserChoice() {
    if ((userChoice=="rock") || (userChoice=="paper") || (userChoice=="scissors")) {
        return true} 
    else {
        return false
    }
};

let userScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]
userChoice=getUserChoice()
userChoice=userChoice.toLowerCase()
checkUserChoice()
while (checkUserChoice()==false) {
    userChoice=getUserChoice()
    userChoice=userChoice.toLowerCase()
    checkUserChoice()
};

let computerChoice = choices[Math.floor(Math.random()*3)]

function playRound(userChoice, computerChoice) {
    if (userChoice=="rock" && computerChoice=="paper") {
        computerScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You lose this round!`
    } else if (userChoice=="rock" && computerChoice=="scissors") {
        userScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You win this round!`
    } else if (userChoice=="paper" && computerChoice=="rock") {
        userScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You win this round!`
    } else if (userChoice=="paper" && computerChoice=="scissors") {
        computerScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You lose this round!`
    } else if (userChoice=="scissors" && computerChoice=="rock") {
        computerScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You lose this round!`
    } else if (userChoice=="scissors" && computerChoice=="paper") {
        userScore += 1
        return `You chose ${userChoice}. The computer chose ${computerChoice}. You win this round!`
    } else {return `You chose ${userChoice}. The computer chose ${computerChoice}. It's a draw!`}
};
console.log(playRound(userChoice, computerChoice))
console.log(`Computer score: ${computerScore} // User score: ${userScore}`)