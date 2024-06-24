console.log(window);

window.console.log("Hello");

console.log(window.document);
console.dir(window.document);


console.log(document.body);
console.dir(document.body);

console.dir(document.body.childNodes[1]);

document.body.style.background="cyan";

console.dir(document.body.childNodes[3].innerText = "ABCD");


// DOM manupulation

let heading = document.getElementById("heading");
console.dir(heading);

let cheading = document.getElementsByClassName("cheading");
console.dir(cheading);

let tag = document.getElementsByTagName("p");
console.dir(tag);

// Query Selector

let elements = document.querySelector(".cheading");
console.dir(elements);

elements = document.querySelectorAll(".cheading");
console.dir(elements);

elements = document.querySelector("#heading");
console.dir(elements);

// Properties

let firstEl = document.querySelector("#heading");
console.log(firstEl.tagName);

console.dir(document.body.firstChild);

console.dir(document.querySelector("div").children);

console.dir(document.querySelector("div").innerText);

console.dir(document.querySelector("div").innerHTML);

console.dir(document.querySelector("#hidden").textContent);

