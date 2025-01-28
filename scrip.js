function getComputerChoice(){
    let ScoreCPU = Math.floor(Math.random() * 100);
    console.log(ScoreCPU);
    if (ScoreCPU <= 33){
        ScoreCPU = 1;
        return "Rock";
    }
    else if (ScoreCPU > 33 && ScoreCPU <= 66){
        ScoreCPU = 2;
        return "Paper";
    }
    else{
        ScoreCPU = 3;
        return "Scissors"
    }
}

function getHumanChoice(){
    let ScoreHuman = prompt();

    if (ScoreHuman === "Rock"){
        ScoreHuman = 1;
        return ScoreHuman;
    }

    else if(ScoreHuman === "Paper"){
        ScoreHuman = 2;
        return ScoreHuman;
    }

    else if(ScoreHuman === "Scissors"){
        ScoreHuman = 3;
        return ScoreHuman;
    }

    else{
        return "It's Rock Paper Scissors my dude :P"
    }

}

console.log(getComputerChoice());
console.log(getHumanChoice());