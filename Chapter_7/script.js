// Attributes

let div = document.querySelector("div");
console.log("div");

let id = div.getAttribute("id");
console.log(id);

id = div.getAttribute("name");
console.log(id);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

// Style
console.log(div.style);
div.style.backgroundColor="purple";
div.style.fontSize="20px";

// Insert Element
// New Button Creation
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);
// Now add this new btn on html page
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
div.append(newBtn);
// These are 4 properties for to set the button 

// Remove or delete the element 
para.remove();

// Q . Create a new button element. Give it a text "click me" back ground color red and text color white
//     Insert a button as a first element in body tag 

let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor="red";
newButton.style.color="white";
let body = document.querySelector("body").prepend(newButton);


// Q . create a p tag in html, gives it a class and some styling
//     Now create a new class in css and try to append these class in p element
//     Did you notice how you overide the class name when you add a new one ?
//     solve the problem using classList 

para = document.querySelector("p")
console.log(para);
// para.setAttribute("class","newClass");

console.log(para.classList);
para.classList.add("newClass");
console.log(para.classList);
