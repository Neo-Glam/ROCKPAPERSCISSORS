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

  function checkScore(){
    if (humanScore >= 5){
        victory.innerText = "Victoire";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5){
        victory.innerText = "Defaite";
        humanScore = 0;
        computerScore = 0;
    }
    else{
        return;
    }

    }

  let boite = document.querySelector('#boite');

  boite.addEventListener('click', (event) =>{
      let target = event.target;
  
      switch(target.id){
          case 'rock':
                if (humanScore >= 5 || computerScore >= 5){
                    newScore();
                }
              humanChoice = "ROCK";
              console.log(humanChoice);
              getComputerChoice();
              playRound(humanChoice, computerChoice);
              newChoix();
              newScore();
              checkScore();
              break;
          case 'paper':
            if (humanScore >= 5 || computerScore >= 5){
                newScore();
            }
              humanChoice = "PAPER";
              console.log(humanChoice);
              getComputerChoice()
              playRound(humanChoice, computerChoice);
              newChoix();
              newScore();
              checkScore();
              break;
          case 'scissors':
            if (humanScore >= 5 || computerScore >= 5){
                newScore();
            }
              humanChoice = "SCISSORS";
              console.log(humanChoice);
              getComputerChoice()
              playRound(humanChoice, computerChoice);
              newChoix();
              newScore();
              checkScore();
              break;
      }
  })
  
  let scoring = document.querySelector('#scoring');

  const victory = document.createElement('div');
  victory.innerText = "";
  scoring.appendChild(victory);
  
  const choix = document.createElement('div');
  choix.innerText = "toi : " + humanChoice + " ||| " + " Ordi : " + computerChoice;
  scoring.appendChild(choix);
  
  function newChoix(){
      choix.innerText = "toi : " + humanChoice + " ||| " + " Ordi : " + computerChoice;
  }
  
  const score = document.createElement("div");
  score.innerText = "Ton Score " + humanScore + " ||| " + " Score Ordi " + computerScore;
  scoring.appendChild(score);
  
  function newScore(){
      score.innerText = "Ton Score " + humanScore + " ||| " + " Score Ordi " + computerScore;
  }
  

