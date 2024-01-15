//arrays
const myArray = [];
//arrays can hold any type of data
myArray[0] = "peter";
myArray[1] = "john";
myArray[2] = 35;
myArray[3] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

myArray.push("school");
myArray.unshift(42);
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

const firstItem = myArray.shift();
console.log(firstItem);

console.log(myArray);
delete myArray[1];
console.log(myArray);

myArray.splice(1, 1, 42);
console.log(myArray);

myArray.splice(1, 0, "john");
console.log(myArray);


myarray1 = ["a", "b", "c" , "d", "e", "f"];
newarray = myarray1.slice(1, 4);
console.log(newarray);

myarray1.reverse();
console.log(myarray1);

myarray2 = myarray1.join();
console.log(myarray2);

myarray3 = myarray2.split(",");
console.log(myarray3);

myarrayA = [1, 2, 3, 4, 5];
myarrayB = [6, 7, 8, 9, 10];
myarrayC = myarrayA.concat(myarrayB);
myarrayD = [...myarrayA, ...myarrayB]
myArrayE = [myarrayA, myarrayB]

console.log(myarrayC);
console.log(myarrayD);
console.log(myArrayE);

const equipA = ["sword", "shield", "armor"];
const equipB = ["staff", "wand", "potion"];

const equipC = ["footbal", "basketball", "baseball"];
const equipD = ["hockey", "cricket", "rugby"];

const equipE = [equipA, equipB];
const equipF = [equipC, equipD];

console.log(equipE[0][1]);
console.log(equipF[1][2]);

const store = [equipE, equipF];
console.log(store[1][0][2]);


