console.log(Math.round(3.5))
console.log(Math.floor(3.5))
console.log(Math.random()*3)
//random numbers
console.log(Math.floor(Math.random()*10)+1) //from 1-10
console.log("peter".charAt(Math.floor(Math.random()*4)+1))//from1-4

const myName = "jonathan"
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))

// conditionals: if statements

//if(condition){
    //run statement
//}else{
    //run different statment
//}
let customerisbanned = false;
let soup = "chicken noodle soup";
let reply;
if (customerisbanned){
    reply = "no soup for you !"
}else if (soup){
    reply = `here is your order of ${soup}`;
}else{
    reply = `sorry we are out of ${soup}`
}

console.log(reply)


let testscore = 50;
let grade;
let collegestudent = true;
if (testscore >= 90){
    grade = "A";
}else if(testscore >= 80){
    grade = "B";
}
else{ if(collegestudent){
        grade = "u";
      }else { 
        grade = 'f'
    }
}

console.log(grade)
console.log(typeof testscore)
console.log(typeof grade)
console.log(typeof collegestudent)





if(player1 === computer){
    console.log("tie")
}
else if(player1 === "rock"){
    if(computer === "paper"){
        console.log("computer wins")
    }else{
        console.log("player1 wins")
    }
}
else if(player1 === "paper"){
    if(computer === "scissors"){
        console.log("computer wins")
    }else{
        console.log("player1 wins")
    }
}
else if(player1 === "scissors"){
    if(computer === "rock"){
        console.log("computer wins")
    }else{
        console.log("player1 wins")
    }
}
else{
    console.log("invalid input")
}




let playerOne = "rock";
let computer = "paper";

switch(playerOne){
    case computer:
        console.log("tie")
        break;

    case "rock":
        if(computer === "paper"){
            console.log("computer wins")
        }else{
            console.log("player1 wins")
        }
        break;
    case "paper":
        if(computer === "scissors"){
            console.log("computer wins")
        }else{
            console.log("player1 wins")
        }
        break;

    case "scissors":
        if(computer === "rock"){
            console.log("computer wins")
        }else{
            console.log("player1 wins")
        }
        break;
    default:
        console.log("invalid input")
        break;
    
}
    
//ternary operator
let soup1 = "chicken noodle soup";
let response = soup1 ? `here is your ${soup1}` : "we are out of soup";

console.log(response)

let soup2 = "chicken noodle soup";
let isCustomerBannded = false;
let soupAccess = isCustomerBannded ? "no soup for you" : soup2 ? `here is your ${soup2}` : "we are out of soup";
console.log(soupAccess)


let testscore1 = 50;
let myGrade = testscore1 >= 90 ? "A" : testscore1 >= 80 ? "B" : testscore1 >= 70 ? "C" : testscore1 >= 60 ? "D" : "F";

let player1 = "rock";
let computer1 = "paper";
let results = 
   player1 === computer1 ? "tie"
 : player1 === "rock" && computer1 === "paper" ? "computer wins" 
 : player1 === "paper" && computer1 === "scissors" ? "computer wins"
 : player1 === "scissors" && computer1 === "rock" ? "computer wins"
 : "player1 wins";
 console.log(results)


 //user input
 alert("hello world")
 confirm("OK === true, cancel === false")
 


