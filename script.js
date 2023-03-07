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