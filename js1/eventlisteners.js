//event listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
console.log(view);

//syntax : element.addEventListener(event, function, useCapture);
//event : required. String that specifies the name of the event
//function : required. Specifies the function to run when the event occurs.
//useCapture : optional. Boolean that specifies whether the event should be executed in the capturing or in the bubbling phase. Default false

// const doSomething = () => {
//     alert("do something");
// }
// h2.addEventListener("click", doSomething, false);
// //h2.removeEventListener("click", doSomething, false);

// //anonymous function
// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "clicked"
// });


//event bubbling
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("DOM is ready");
    }
    initApp();
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");


    view.addEventListener ("click", (event) => {
        view.style.backgroundColor = "red"; 
    },false);

    div.addEventListener ("click", (event) => {
        div.classList.toggle("purple");
        div.classList.toggle("black");
    }, false);

    h2.addEventListener ("click", (event) => {
        event.stopPropagation();
        const myText = event.target.textContent;
        myText === "My 2nd View" ? event.target.textContent = "clicked" 
        :event.target.textContent = "My 2nd View" ;
    }, false);


const nav = document.querySelector("nav");
nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
}, false);
nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
}, false);

};

// const initApp2 = () => {
//     const view3 = document.querySelector("#view3");
//     const myForm = view3.querySelector("#form");
//     myForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const myText = event.target.querySelector("input[type=text]").value;
//         console.log(myText);
//     }, false);
//};
