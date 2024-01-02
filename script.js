function getComputerChoice(){ 
    let randomInt = Math.floor(Math.random()*3);
    if (randomInt==1){
        return "rock";
    }
    else if (randomInt==2){
        return "paper";
    }

    else if (randomInt==0){
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    let toString = String(playerSelection);
    let playerAnswer = toString.toLowerCase();
    if (computerSelection == "rock" && playerAnswer == "scissors"){
        return "You lose. Rock beats scissors"
    }
    else if (computerSelection == "rock" && playerAnswer == "paper"){
        return "You win. Paper beats rock"
    }
    else if (computerSelection == "paper" && playerAnswer == "rock"){
        return "You lose. Paper beats rock."
    }
    else if (computerSelection =="paper" && playerAnswer == "scissors"){
        return "You win. Scissors beats paper"
    }
    else if (computerSelection =="scissors" && playerAnswer =="paper"){
        return "You lose. Sicssors beats paper"
    }
    else if (computerSelection =="scissors" && playerAnswer =="rock"){
        return "You win. Rock beats Sicssors "
    }
    else if (computerSelection == playerAnswer){
        return playRound(playerSelection,getComputerChoice())
    }
}