const initGame = () => {
    const startGame = confirm("shall we play rock, paper, scissors");
    startGame ? playGame() : alert("okay, maybe next time")
};

//game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice)
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice)
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const results = determineWinner(playerChoice, computerChoice);
        displayResault(results);
        if(asToPlayAgain()){
            continue;
        }
        else{
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("please enter rock, paper or scissors");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice|| playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
};

const decideNotToPlay = () => {
    alert("i guess you changed your mind. maybe next time.")
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" ||
        playerChoice === "paper"||
        playerChoice === "scissors"
    ){
        return playerChoice;
    }
    else{
        return false;
    }

};

const invalidChoice = () => {
    alert("you did not enter rock, paper,scissors")
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3)
    const rsparray = ["rock", "paper", "scissors"]
    return rsparray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = 
    player === computer ? "tie"
    : player === "rock" && computer === "paper" ? `playerOne: ${player}\ncomputer: ${computer}\ncomputer wins`
    : player === "paper" && computer === "scissors" ? `playerOne: ${player}\ncomputer: ${computer}\ncomputer wins`
    : player === "scissors" && computer === "rock" ? `playerOne: ${player}\ncomputer: ${computer}\ncomputer wins`
    : "player1 wins";
    return winner;

};

const displayResault = (result) => {
    alert(result);

};

const asToPlayAgain = () => {
    return confirm("play again");
};

const thanksForPlaying = () => {
    alert("ok thanks for playing");
};

initGame();