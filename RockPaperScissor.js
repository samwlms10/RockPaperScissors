// creating a function that gets the computers choice
function getComputerChoice() {
    const rockPaperScissor = ["Rock","Paper","Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissor[randomNumber];
}
// A function to prompt the user for a choice.
function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors.")
    return humanChoice;
}
// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function for a single round of Rock Paper Scissors
function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "Rock") {
        console.log(computerChoice)
        if (humanChoice == "rock") {
            console.log("You both chose Rock, its a tie!");
        }
        else if (humanChoice == "paper") {
            console.log("Computer: Rock!  Human: Paper! Human wins!");
            humanScore++;
        }
        else {
            console.log("Computer: Rock!  Human: Scissors! Computer wins!");
            computerScore++
        }
}
    if (computerChoice === "Paper") {
        if (humanChoice == "rock") {
            console.log("Computer: Paper!  Human: Rock! Computer wins!");
            computerScore++
        }
        else if (humanChoice == "paper") {
            console.log("You both chose Paper, its a tie!");
        }
        else {
            console.log("Computer: Paper!  Human: Scissors! Human wins!");
            humanScore++
        }
}
    if (computerChoice === "Scissors") {
        if (humanChoice == "rock") {
            console.log("Computer: Scissors!  Human: Rock! Human wins!");
            humanScore++
        }
        else if (humanChoice == "paper"){
            console.log("Computer: Scissors!  Human: Paper! Computer wins!");
            computerScore++
        }
        else {
            console.log("You both chose Scissors, its a tie!");
        }
}
}

// Function to play 5 rounds of Rock Paper Scissors
function playGame() {
let rounds = 5;

for (i = rounds; rounds > 0; rounds--)
    playRound(getComputerChoice(), getHumanChoice())
    console.log("* Humans Score - " + humanScore);
    console.log("* Computer Score - " + computerScore);
    if (humanScore > computerScore) {
        console.log("Human Wins Congratultions!!")
    }
    else if (humanScore < computerScore) {
        console.log("Computer Wins Better Luck Next Time!!")
    }
    else {
        console.log("Human And Computer Tied!!")
    }
}

playGame();