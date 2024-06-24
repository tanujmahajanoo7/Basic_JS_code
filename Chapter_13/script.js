//Fetch API

const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async() =>
//     {    
//         console.log("Getting data ...");
//         let response = await fetch(url);
//         console.log(response);
//         console.log(response.status); //JS Object Notation
//         let data = await response.json();
//         console.log(data);
//         console.log(data[0].text);
//         factPara.innerText = data[0].text;
//     };

// console.log(getFacts());

// function getFacts(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener("click",getFacts);
