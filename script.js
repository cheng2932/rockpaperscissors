function getComputerChoice(){ 
    let randomInt = Math.floor(Math.random()*3);
    if (randomInt==1){
        return "Rock";
    }
    else if (randomInt==2){
        return "Paper";
    }

    else if (randomInt==0){
        return "Scissors";
    }
}

function playRound(computerSelection,playerSelection){
    let  playerAnswer = playerSelection.toLowerCase()
    if (computerSelection == "Rock" && playerAnswer == "scissors"){
        return "You lose. Rock beats scissors"
    }
    else if (computerSelection == "Rock" && playerAnswer == "paper"){
        return "You win. Paper beats rock"
    }
    else if (computerSelection == "Paper" && playerAnswer == "rock"){
        return "You lose. Paper beats rock."
    }
    else if (computerSelection =="Paper" && playerAnswer == "scissors"){
        return "You win. Scissors beats paper"
    }
    else if (computerSelection =="Scissors" && playerAnswer =="paper"){
        return "You lose. Sicssors beats paper"
    }
    else if (computerSelection =="Scissors" && playerAnswer =="rock"){
        return "You win. Rock beats Sicssors "
    }
    else if (computerSelection == playerAnswer){
        return playRound()
    }
}