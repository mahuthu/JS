let playgame = confirm("shall we play rock paper scissors?");
if(playgame){
    while(playgame){
        const playerChoice = prompt("please enter rock, paper, or scissors");
        if(playerChoice || playerChoice === ""){
            playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
                const computerChoice = Math.floor(Math.random()*3 + 1);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];
                const results = playerOne === computer ? "tie"
                : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : "player1 wins";

                alert(results);

                playgame = confirm("do you want to play again?");
                if(!playgame) alert("maybe next time");
                    continue;
            }
        
            else{
                alert("you did not enter rock, paper, or scissors");
                continue;
            }
        }
    
        else{
            alert("i guess you changed your mind. Maybe next time ");
            break;
        }     
    }
}
else{
    alert("maybe next time");
}