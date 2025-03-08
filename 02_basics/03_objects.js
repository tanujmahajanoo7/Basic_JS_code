// singleton
// Object.create    //constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tanuj",
    "full name": "Tanuj Mahajan",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "tanuj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser[mySym])

// Different syntax for calling the element of an object

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tanuj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tanuj@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// JsUser.greeting();
// JsUser.greetingTwo();