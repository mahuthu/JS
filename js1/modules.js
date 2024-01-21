//modules
//automatically applies strict mode

const guitar = () => {
    return "playing guitar";
}

const shredding = () => {
    return "shredding guitar";
}

const plucking = () => {
    return "plucking guitar";
}


export default guitar;
export {shredding, plucking};


// Path: js1/main.js
//main.js
//importing modules
//automatically applies strict mode

import guitar from './modules.js';
import {shredding as sh, plucking as pl} from './modules.js';


console.log(guitar());


//import * as guitar from './modules.js';
//console.log(guitar.shredding());
//console.log(guitar.plucking());
//console.log(guitar.default());



export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    show(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}