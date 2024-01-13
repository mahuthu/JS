function sum(num1, num2) {
    if(num1 == undefined || num2 == undefined) {
        throw new Error("sum() requires two number parameters");
    }
    return num1 + num2;
}
console.log(sum(2, 3));

function getUsername(email) {
    let username = email.split("@")[0];
    return username;
}
console.log(getUsername("mahuthup@gmail.com"));


//function expression
const sumExpression = function(num1, num2) {
    return num1 + num2;
}
console.log(sumExpression(2, 3));


//arrow functions
const getUsernameArrow = (email) => {
    let username = email.split("@")[0];
    return username;
}
console.log(getUsernameArrow("mahuthup@gmail.com"));

const toProperCase = (name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("peter"));

