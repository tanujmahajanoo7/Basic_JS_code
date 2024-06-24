// Q.Create What is heading element with text "Hello JavaScript".Append from "for college student" to this text using js

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " for college student";


// Q . Create 3 divs With common class name - "box". access them and add some Unique text to each of them

let divs = document.querySelectorAll(".box");
console.log(divs);

let idx=0;
for(div of divs)
    {
        div.innerText = `New unique value ${idx}`;
        idx++;
    }


// divs[0].innerText=("unique text one");
// divs[1].innerText=("unique text two");
// divs[2].innerText=("unique text three");