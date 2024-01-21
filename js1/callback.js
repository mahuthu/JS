//callbacks
//this allows us to pass a function as an argument to another function

// function sayHiLater(){
//     var greeting = 'Hi!';
//     setTimeout(function(){  //this is a callback function
//         console.log(greeting);
//     }, 3000);

// }

//sayHiLater();
 
//promises
//delivers async code in a more readable way
//a promise is an object that may produce a single value some time in the future
//either a resolved value or a reason that it's not resolved
//a promise may be in one of 3 possible states: fulfilled, rejected, or pending
//callbacks are a way to handle something after something else is done
//promises are a way to handle something after something else is done, but with a better syntax
//promises are a way to write asynchronous code that is easier to read, easier to write, and easier to debug
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve(' this is resolved');
    }
    else{
        reject('rejected');
    }
});

console.log(myPromise);

//then() method takes up to two arguments: callback functions for the success and failure cases of the promise
myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})


const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('peter');
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});


//pending
