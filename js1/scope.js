//var let const
//var
var x = 10;
var x = 20;
console.log(x);

let variable = 10;
variable = 20;
console.log(variable);

const constant = 10;
console.log(constant);

//global scope
var myVariable = 10;
const myConstant = 20;
let myLet = 30;

//block scope
// can be if, for, while, do while, switch, function, etc
{
    ;
    let myLet = 30;
    console.log(myLet);
}

//local scope
function myFunction() {
    let myLet = 30;
    console.log(myLet);
}

console.log(myFunction());


var x = 10;
const y = 20;
let z = 30;

console.log('global: ${x}');
console.log('global: ${y}');
console.log('global: ${z}');

function myFunction() {
    var x = 100;
    const y = 200;
    
    console.log('function: ${x}');
    console.log('function: ${y}');
    console.log('function: ${z}');


{
    var x = 1000; //function scoped
    const y = 300;//block scoped
    let z = 300;//block scoped
    console.log('block: ${x}');
    console.log('block: ${y}');
    console.log('block: ${z}');
}

}
myFunction();

