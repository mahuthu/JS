//web storage api
//not part of DOM - refers to the window api
//available to JS via the global variable window.localStorage
//we do not have to type window, it is implied

window.alert(window.location);
alert(location);


//local storage is a key value pair. it is persistent and available across sessions
//session storage is a key value pair. only available for the duration of the session
const myArray = ["John", "Bob", "Fred"]
const myObj = {
    name: 'John',
    hobbies: ['coding', 'gaming', 'reading'],
    logNmae: function(){
        console.log(this.name);//json looses methods during stringify
    }
};


sessionStorage.setItem("mysessionstore", JSON.stringify(myObj))
const sessiondata = JSON.parse(sessionStorage.getItem("mysessionstore"))
console.log(sessiondata)//string

//localStorage.setItem("mylocalstore", JSON.stringify(myObj))
//const key = localStorage.key(0)
//const.key1 = localStorage.length
// const localdata = JSON.parse(localStorageStorage.getItem("mylocalstore"))
// console.log(localdata)//string
//console.log(key)

