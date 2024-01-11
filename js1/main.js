console.log("hello world");
console.log(typeof "dave");
console.log(typeof 42);
// string methods
const myVariable =  "Mahtematics";
console.log(myVariable.length)
console.log(myVariable.charAt(3))
console.log(myVariable.indexOf("ti"))
console.log(myVariable.lastIndexOf("tem"))
console.log(myVariable.slice(5,8))
console.log(myVariable.toLowerCase())
console.log(myVariable.toUpperCase())
console.log(myVariable.includes("div"))
console.log(myVariable.split("e"))
console.log(myVariable.split(""))

//number methods 
//both integers and floats are numbers in js
const myString = "42.571abc"
console.log(myString)
console.log(Number(myString))

console.log(Number.parseFloat(myString).toFixed(2))
Number.isNaN()
console.log(Number.isNaN("dave"))

//mathmethods

console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.round(3.5))
console.log(Math.ceil(3.5))
console.log(Math.floor(3.5))
console.log(Math.pow(3, 5))
console.log(Math.min(3, 2, 5, 1, 9))
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*4))


console.log("peter".charAt(Math.floor(Math.random()*4)+1))//from1-4