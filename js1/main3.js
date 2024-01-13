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



let playGame = confirm("do you want to play a game?")
if(playGame){
    let playerChoice = prompt("please enter rock,  paper, scissors")
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;
            let results = playerOne === computer ? "tie"
            : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
            : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
            : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
            : "player1 wins";

            alert(results)
            
            let  playAgain = confirm("do you want to play again?")
            playAgain ? location.reload() : alert("maybe next time")
        }

    }
    else{
        alert("invalid input")
    }
}

else{
    alert("maybe next time")
}