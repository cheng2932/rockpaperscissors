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


function game(){
    let computerScore = 0;
    let playerScore = 0;
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

const score = document.querySelector(".results");
const btnRock = document.querySelector(".rock");
btnRock.addEventListener("click", () => {
    score.textContent = playRound('rock',getComputerChoice())

});

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
    score.textContent = playRound('paper',getComputerChoice())

});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener("click", () => {
    score.textContent = (playRound('scissors',getComputerChoice()))
});


