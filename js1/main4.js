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

