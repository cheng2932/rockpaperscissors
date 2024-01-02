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

// pseudocode
// FUNCTION game
//  SET computerScore to 0
//  SET playerScore to 0
//  FOR 1 to 5 
//      GET user input
//      SET playerSelection to user input
//      CALL playRound with playerSelection and getComputerchoice RETURNING string
//      IF "YOU LOSE" 
//          INCREMENT computerScore +1
//      ENDIF 
//      ELSE IF "YOU WIN" 
//          INCREMENT playerScore +1
//      ENDIF 
//      DISPLAY computerSCore and playerScore
//  ENDFOR
// IF 
// END FUNCTION

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0;i<5;i++){
        let playerAnswer = String(prompt("Enter scissors, rock or paper"))
        let win = playRound(playerAnswer,getComputerChoice());
        console.log(win)
        if (win.includes("win") == true){
            playerScore += 1
            console.log(`Your score is ${playerScore}`)
        }
        else{
            computerScore +=1
            console.log(`Computer score is ${computerScore}`)
        }
       
    }
    if (computerScore > playerScore){
        console.log("Computer wins!")
    }
    else if (playerScore<computerScore){
        console.log("Human wins!")
    }
}