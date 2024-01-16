const myObj = {
name: "dave",
hobbies: ["reading", "writing", "coding"],
hello: function(){
    return "hello world";
}
};
console.log(myObj.name);
console.log(myObj.hello());
console.log(typeof myObj);

const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);
console.log(sendJson.name);//undefined

const receiveJson = JSON.parse(sendJson);// convert json to js object
console.log(receiveJson);//{ name: 'dave', hobbies: [ 'reading', 'writing', 'coding' ], hello: [Function: hello] }