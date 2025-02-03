let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;


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

let boite = document.querySelector('#boite');

boite.addEventListener('click', (event) =>{
    let target = event.target;

    switch(target.id){
        case 'rock':
            humanChoice = "ROCK";
            console.log(humanChoice);
            getComputerChoice();
            playRound(humanChoice, computerChoice);
            newscore();
            return humanScore + computerScore;
        case 'paper':
            humanChoice = "PAPER";
            console.log(humanChoice);
            getComputerChoice()
            playRound(humanChoice, computerChoice);
            newscore();
            return humanScore + computerScore;
        case 'scissors':
            humanChoice = "SCISSORS";
            console.log(humanChoice);
            getComputerChoice()
            playRound(humanChoice, computerChoice);
            newscore();
            return humanScore + computerScore;
    }
})

let scoring = document.querySelector('#scoring');

const score = document.createElement("div");
score.innerText = "Ton Score " + humanScore + " ||| " + " Score Ordi " + computerScore;
scoring.appendChild(score);

function newscore(){
    score.innerText = "Ton Score " + humanScore + " ||| " + " Score Ordi " + computerScore;
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


