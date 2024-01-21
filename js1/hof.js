//higher order functions
//functions that operate on/with other functions
//they can:
//accept other functions as arguments
//return a function
//or both

import { posts } from "./post.js";

//forEach
//executes a provided function once for each array element
posts.forEach((post) => {
    console.log(post)
});

console.clear();


//filter

const filteredposts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filteredposts);

//map
//creates a new array populated with the results of calling a provided function on every element in the calling array
const mappedPost = filteredposts.map((post) => {
    return post.id *10;
})
console.log(mappedPost);

//reduce
//executes a reducer function on each element of the array, resulting in a single value
const reducedPost = mappedPost.reduce((sum, post) => {
    return sum + post;
});

console.log(reducedPost);
