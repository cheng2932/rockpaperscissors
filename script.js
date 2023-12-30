function getComputerChoice(){ 
    let randomInt = Math.floor(Math.random()*3);
    if (randomInt==1){
        return "Rock";
    }
    else if (randomInt==2){
        return "Paper";
    }

    else if (randomInt==0){
        return "Sicssors";
    }

}