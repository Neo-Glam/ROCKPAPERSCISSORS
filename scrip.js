function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 100);
    if  (computerChoice <= 33){
        computerChoice = "ROCK";
        console.log("CPU: ROCK")
        return computerChoice;
    }
    else if  (computerChoice <= 66){
        computerChoice = "PAPER";
        console.log("CPU: PAPER")
        return computerChoice;
    }
    else{
        computerChoice = "SCISSORS";
        console.log("CPU: SCISSORS")
        return computerChoice
    }
}

function getHumanChoice(){
    humanChoice = prompt("ROCK ,PAPER ,SCISSORS").toUpperCase();

    if (humanChoice === "ROCK"){
        console.log("You: ROCK")
        return humanChoice;
    }

    else if(humanChoice === "PAPER"){
        console.log("You: PAPER")
        return humanChoice;
    }

    else if(humanChoice === "SCISSORS"){
        console.log("YOU: SCISSORS")
        return humanChoice;
    }

    else{
        console.log("It's ROCK PAPER SCISSORS my dude :P");
    }

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        console.log("YOU LOSE");
        return computerScore++;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("YOU WIN");
        return humanScore++;
    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("YOU WIN");
        return humanScore++;
    }
    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        console.log("YOU LOSE");
        return computerScore++;
    }
    else if (humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("YOU LOSE");
        return  computerScore++;
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("YOU WIN");
        return humanScore++;
    }
    else if(humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS"){
        console.log("DONT COUNT :P");
        return;
    }
    else{
        console.log("DRAW");
        return;
    }

  }

function playGame(){

    for(let rounds = 0; rounds < 5; rounds++){
        getHumanChoice();
        getComputerChoice();
        playRound(humanChoice, computerChoice)
        console.log(humanScore, computerScore)

    }
    if (humanScore > computerScore){
        console.log("YOU ARE THE WINNER");
        return;
    }
    else if(humanScore < computerScore){
        console.log("YOU ARE A BIG LOSER");
        return;
    }
    else{
        console.log("IT'S A DRAW");
        return;
    }
}
let humanScore = 0;
let computerScore = 0;
playGame();

