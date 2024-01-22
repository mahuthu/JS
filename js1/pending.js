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


const getUserEmail = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const user = await response.json();
    
    const userEmailArray = user.map(user => {
        return user.email;
    })

    postToWebPage(userEmailArray)
}

const postToWebPage = (data) => {
    console.log(data);
}

getUserEmail();


//2nd parameter of fetch is an object that can be used to configure the request
//method: GET, POST, PUT, DELETE
//headers: content-type, accept
//body: JSON.stringify(data)

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",  {
        method: "GET",
        headers: {
            Accept: "application/json" //text/plain, text/html, application/json
        }
    });
    const data = await response.json();
    console.log(data);
}

getDadJoke();