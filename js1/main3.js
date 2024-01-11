function getUserInput(){
    var userInput = prompt("choose rock, paper, or scissors").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
    }
    else{
        alert("invalid input");
        return getUserInput();
    }

}

function getComputerInput(){
    var choices = ["rock", "paper", "scissors"];
    var randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function determineWinner(userInput, computerInput){
    if(userInput === computerInput){
        return "tie";
    }
    else if((userInput === "rock" && computerInput === "paper") || 
    (userInput === "paper" && computerInput === "scissors") || 
    (userInput === "scissors" && computerInput === "rock")){
        return "you lose";
    }
    else{
        return "you win";
    }
        
}

function playGame(){
    var userInput = getUserInput();
    var computerInput = getComputerInput();

    console.log("you chose " + userInput);
    console.log("computer chose " + computerInput);

    var winner = determineWinner(userInput, computerInput);
    alert(winner);
}

playGame();