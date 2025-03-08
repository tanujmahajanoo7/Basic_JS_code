const coding = ["js", "ruby", "java", "python", "cpp"]

// Anonymous function
// coding.forEach( function (val){
//     console.log(val);
// } )

// Arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)      //Don't execute the function only pass the function with reference 

// coding.forEach( (item, index, arr)=> {           //3 parameters
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )