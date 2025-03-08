//var c = 300
let a = 300                         //Global Scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);   //Block Scope
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// ---------------------------------------------------------------------

// Global scope is different in windows and node run on terminal

// ---------------------------------------------------------------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
