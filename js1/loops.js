//loops
//while loop
let myNumber = 10;
while (myNumber < 5) {
    console.log(myNumber);
    myNumber++;
}

let name1 = "peter";
let counter = 0;
let myletter;
while(true){
    myletter = name1[counter];
    console.log(myletter);
    if (counter >= name1.length) {
        break;
    }
    counter++;
}



let num = 0;
while (num < 10) {
    num += 2;
    console.log(num);
}


//do while loop
let myNumber1 = 10;

do {
    console.log(myNumber1);
    myNumber1 ++;
}while (myNumber < 5);

//for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; ) {
    console.log(i);
    i+=2;
}

let j = 2;
for (; j < 10; ) {
    console.log(j);
    j+=2;
}

let name = "peter";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}




//break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//for of loop
let myName = "peter";
for (let letter of myName) {
    console.log(letter);
}

let myArray = ["peter", "john", "jane"];
for (let name of myArray) {
    console.log(name);
}

//for in loop
let myObject = ["peter", "john", "jane"];
for (let name in myObject) {
    console.log(name);
}

