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
