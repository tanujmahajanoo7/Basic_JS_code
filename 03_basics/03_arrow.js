const user = {
    username: "Tanuj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       //this keyword refers current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"    
// user.welcomeMessage()

// console.log(this);

// ---------------------------------------------------------------------
// Global oject in windows/browser is window 
// ---------------------------------------------------------------------

// function chai(){
//     let username = "Tanuj"
//     console.log(this.username);
// }
// chai()

// ---------------------------------------------------------------------

// const chai = function () {
//     let username = "Tanuj"
//     console.log(this.username);    //Not allowed in function
// }

// ---------------------------------------------------------------------

const chai =  () => {
    let username = "Tanuj"
    console.log(this);
    console.log(username);
}

// ---------------------------------------------------------------------

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                            //Expicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2       //Inplicit return

// const addTwo = (num1, num2) => ( num1 + num2 )    //()can allow to not writing return keyword
// console.log(addTwo(3, 4))


const Rename = (num1, num2) => ({username: "Tanuj"})//To return object () should be present
// console.log(Rename(3, 4))

// ---------------------------------------------------------------------

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach((i)=> console.log(i))