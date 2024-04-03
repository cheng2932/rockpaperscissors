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

function winnerAnnoucement(playerScore,computerScore)
{
    if(playerScore==5){
        alert(`Human score has ${playerScore} points and won!`)
    }
    else if(computerScore==5){
        alert(`Computer score has ${computerScore} points and won!`)
    }
}

function game(winnerlog){
    if (winnerlog.includes("win")){
        HumanScore+=1;
        gamescore.textContent = `${HumanScore} ${computerScore}` ;
    }
    else{
        computerScore +=1
        gamescore.textContent = `${HumanScore} ${computerScore}` ;
    }
    }


let HumanScore = 0;
let computerScore = 0;

const score = document.querySelector(".results");
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    score.textContent = playRound('rock',getComputerChoice());
    game(score.textContent);
    winnerAnnoucement(HumanScore,computerScore);
});

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
    score.textContent = playRound('paper',getComputerChoice());
    game(score.textContent);
    winnerAnnoucement(HumanScore,computerScore);
});


const gamescore = document.querySelector(".score");
gamescore.textContent = "hello world";

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener("click", () => {
    score.textContent = (playRound('scissors',getComputerChoice()));
    game(score.textContent);
    winnerAnnoucement(HumanScore,computerScore);;
});




