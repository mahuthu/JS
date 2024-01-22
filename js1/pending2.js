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


const jokeObject = {
    id: "R7UfaahVfFd",
    joke: "What do you call a fish with no eyes? A fsh.",
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" //text/plain, text/html, application/json
        },
        body: JSON.stringify(jokeObj)
    });
    const data = await response.json();
    console.log(data);
}

postData(jokeObject);


//

const requestJoke = async(firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`, {
        
    });
    const data = await response.json();
    console.log(data.value);
}

requestJoke("peter", "smith");


//data from a form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "peter",
        lastName: "smith"
    }
    return requestObj;
}

const buildRequestUrl = (requestdata) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestdata.firstName}&lastName=${requestdata.lastName}`;
}

const requestJoke2 = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    const joke = data.value.joke;
    console.log(joke);
    postJokeToWebPage(joke);
}

const postJokeToWebPage = (joke) => {
    console.log(joke);
}

const init = async() => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke2(requestUrl);
}

