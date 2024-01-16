class Pizza{
    constructor(pizzaType){
        this._type = pizzaType; // _type is a private variable can only be accesses and changed by getter and setter/ within the class
        this.size = "large";
        this._price = 100;
        this.toppings = [];
    }

    get pizzaPrice(){
        return this.price;
    }

    set pizzaPrice(pizzaPrice){
        this.price = pizzaPrice;
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(toppings){
        return this.toppings.push(toppings);
    }
    bake(){
        console.log(`baking ${this.type} pizza of size ${this.size} for ${this.price}`);
    }
}

const myPizza = new Pizza("veggie");
myPizza.bake();
console.log(myPizza.type);

myPizza.pizzaPrice = 200;
console.log(myPizza.pizzaPrice);

myPizza.setToppings("mushrooms");
myPizza.setToppings("onions");
console.log(myPizza.getToppings());

class SpecialtyPizza extends Pizza{
    constructor(pizzaType){
        super(pizzaType);
        this.size = "small";
        this.price = 200;

    }
    slice(){
        console.log(`baking ${this.type} pizza of size ${this.size} for ${this.price}`);
    }
}
const mySpecialtyPizza = new SpecialtyPizza("meat");
mySpecialtyPizza.slice();



//factory function
function pizzaFactory(pizzaSize){
    const crust = "original"
    const size = pizzaSize;

    return{
        bake:() => console.log(`baking ${size} pizza with ${crust} crust`),
    };
}

//private field classes
class Pizza {
    crust = "original";
    #sause = "traditional";
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo(){
        console.log(`here is your ${this.#size} pizza with ${this.#sause} sause`);// #private fields can only be accessed within the class
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust); //crust is a public field //original
console.log(myPizza.getCrust()); //crust is a public field
myPizza.setCrust("thin");
console.log(myPizza.#sauce);//sauce is a private field undefined

//can i use.com