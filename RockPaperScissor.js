// creating a function that gets the computers choice
function getComputerChoice() {
    const rockPaperScissor = ["Rock","Paper","Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissor[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors.")
    return humanChoice;
}

