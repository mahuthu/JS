//user input
alert("hello world")


let myBoolean = confirm("OK === true, cancel === false");
console.log(myBoolean)


let myString = prompt("enter your name");
console.log(myString )

let myString2 = prompt("enter your name");
console.log(myString2 ?? "no name entered")



let name = prompt("enter your name")
if (name){
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name.trim().toLowerCase())
    console.log(name.trim())
}
else{
    console.log("you did not enter your name")
}

let playGame = confirm("do you want to play a game?")
if(playGame){
    let playerChoice = prompt("please enter rock,  paper, scissors")
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;
            let results =
            playerOne === computer
                ? "tie"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                : "player1 wins";

          console.log(results)
        }

    }
    else{
        alert("invalid input")
    }
}

else{
    alert("maybe next time")
}