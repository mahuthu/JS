const users = fetch("https://jsonplaceholder.typicode.com/users")
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    }
)});
//console.log(users); this will not work because fetch is asynchronous. it will execute before the fetch is complete

//async await
//async functions always return a promise
//async functions are non-blocking
//async functions can be chained together
//async functions can be used with try/catch to handle errors

const myUsers = {
    usersList: [],
}

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");//await is used to wait for the promise to resolve
    const users = await response.json();//await is used to wait for the promise to resolve
    return users;
}   

const renderUsers = async () => {
    const data = await getUsers();
    myUsers.usersList = data;
    console.log(myUsers);
};

renderUsers();