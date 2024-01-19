//javascript error and error handling
"use strict";
const makeError = () =>{
    try{
        const name = "dave";
        name = "peter";

    }
    catch(err){
        console.error(err) // you can also use console.warn, console.table
    }                       // you can use err.name, err.message,
};

makeError();

//creating a custom error
const makeError1 = () =>{
    try{
        throw new customError("this is a custom error")

    }
    catch(err){
        console.error(err.stack) // you can also use console.warn, console.table
    }                       // you can use err.name, err.message,
};

makeError1();

function customError (message){
    this.message = message;
    this.name = "customeerror";
    this.stack = `${this.name}: ${this.message}`;
}

//in built errors
const makeError2 = () =>{
    try{
        throw new Error("this is an error") //generic built in type error

    }
    catch(err){
        console.error(err.stack)
        console.error(err.name)
        console.error(err.message)
    }

    finally{
        console.log("....finally")
    }
};

makeError2();

const makeError3 = () => {
    let i = 1;
    while(i <= 5){
        try{
            if(i % 2 !== 0 ){
                throw new Error ("odd number");
            }
            console.log("even number")
        }
        catch(err){
            console.error(err.stack)
        }
    
        finally{
            console.log("....finally")
        }  
    }
}