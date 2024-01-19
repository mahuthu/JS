const view1 = document.getElementById('view1');
console.log(view1);

const view2 = document.querySelector('#view2');//# by id
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const view = document.getElementsByClassName("view");
console.log(view)

const sameView = document.querySelectorAll(".view");
console.log(sameView)

const div = view1.querySelectorAll("div");
console.log(div);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDiv  = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDiv);
for(let i =0; i<evenDiv.length; i++){
    evenDiv[i].style.backgroundColor = "red";
}

const newText = document.querySelector("nav h1");
console.log(newText);
newText.textContent = "Hello World";
newText.style.color = "red";

const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello </h1> <p1>World</p1>";
navbar.style.justifyContent = "space-center";

console.log(evenDiv[0]);
console.log(evenDiv[0].parentElement);
console.log(evenDiv[0].parentElement.children); 
console.log(evenDiv[0].parentElement.children[0]);
console.log(evenDiv[0].parentElement.childNodes);
console.log(evenDiv[0].parentElement.hasChildNodes());

console.log(evenDiv[0].parentElement.children[0].nextElementSibling);
console.log(evenDiv[0].parentElement.children[0].nextElementSibling.previousElementSibling);
console.log(evenDiv[0].parentElement.lastChild );
console.log(evenDiv[0].parentElement.firstChild );
console.log(evenDiv[0].parentElement.firstElementChild );
console.log(evenDiv[0].parentElement.lastElementChild );

view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "auto";

while (view2.lastChild){
    view2.lastChild.remove();
}

const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "red";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.textContent = iter;
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);

};

//createDiv(view2, 1);
for(let i = 0; i<10; i++){
    createDiv(view2, i);
}



