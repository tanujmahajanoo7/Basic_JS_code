console.log("hello");

let btn1 = document.querySelector("#btn1");

let a=0;
btn1.onclick = (e) =>
    {
        console.log("Event1");
        a++;
        console.log(a);
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.clientX,e.clientY);
    }

let div1 = document.querySelector("div");

div1.onmouseover = () =>
    {
        console.log("Event2");
    }


let btn2 = document.querySelector("#btn2");

// Event Listner
btn2.addEventListener("click",()=>{
    console.log("Event Listener 1");
})

btn2.addEventListener("click",()=>{
    console.log("Event Listener 2");
})

const handler3 =()=>{
    console.log("Event Listener 3");
}

btn2.addEventListener("click", handler3);

btn2.addEventListener("click",()=>{
    console.log("Event Listener 4");
})

btn2.removeEventListener("click", handler3);

// Question
// Create a toggle button that changes the screen dark mode when clicked & light mode when clicked again 
let btn3 = document.querySelector("#btn3");
let mode = "Light";

btn3.addEventListener("click", ()=>{
    // console.log("You are trying to change mode");
    if(mode==="Light")
        {
            mode="Dark";
            document.querySelector("body").style.background = "black";
        }
    else
        {
            document.querySelector("body").style.background = "white ";
            mode="Light"
        }
    console.log(mode);
})


let btn4 = document.querySelector("#btn4");

let bd = document.querySelector("body");

btn4.addEventListener("click", ()=>{
    // console.log("You are trying to change mode");
    if(mode==="Light")
        {
            mode="Dark";
            bd.classList.add("dark");
            bd.classList.remove("light");
        }
    else
        {
            mode="Light"
            bd.classList.add("light");
            bd.classList.remove("dark");
        }
    console.log(mode);
})
    