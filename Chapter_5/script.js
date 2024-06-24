// Simple Function
function myfun()
{
    console.log("Hello from function ");
}

myfun();

console.log("___________________________________________");

// parameterised Function
function sum(x,y)
{
    return (x+y);
}
    
    let a = sum(1,1);
    
    console.log(a);
    
console.log("___________________________________________");

// Arrow Functions
const arrowsum = (x,y)=>
    {
        console.log(x+y);
    }
    arrowsum(1,1);

console.log("___________________________________________");

let hello = () => console.log("Hello");
hello();

console.log("___________________________________________");

// Q . Create a function using "function" Keyword that takes string as a argument and return the number of vowels in a string 

function vowel(str)
{
    let count = 0;
    for(const char of str)
    {
        if(char==='a' || char==='e'|| char==='i'|| char==='o'|| char==='u')
        {
            console.log(char);
            count++;
        }
    }
    console.log(count);
}
vowel("Apple");

console.log("___________________________________________");

// Q . Create same arrow function

let afun = (str) =>
{
    let count = 0;
    for(const char of str)
    {
        if(char==='a' || char==='e'|| char==='i'|| char==='o'|| char==='u')
        {
            console.log(char);
            count++;
        }
    }
    console.log(count);
}
afun("Apple");

console.log("___________________________________________");

// for each loop in array 
let arr = [0,1,2];

arr.forEach(function print(val)
{
    console.log(val);
})
console.log("___________________________________________");
arr.forEach((val)=>{
    console.log(val);
})
console.log("___________________________________________");

let sarr = ["Ravi","Suman", "Shital", "Rushi"];

sarr.forEach((val,idx,sarr)=>{
    console.log(val.toUpperCase(),idx,sarr);
})

console.log("___________________________________________");

// Q . For a given array of numbers, print the square of each value using the forEach loop.
let nums = [2,3,4,5,6];
let calc = (val)=>{
    val=val*val;
    console.log(val);
}
nums.forEach(calc)

console.log("___________________________________________");

// Map methods
nums.map((val)=>{
    console.log(val);
})

console.log("___________________________________________");
//store vlaues in the variable
let ab = nums.map((val)=>{
    return val;
});
console.log(ab);

console.log("___________________________________________");
// Filter method
let evenarr = nums.filter((val)=>{
    return val % 2 === 0 ;
})
console.log(evenarr);

console.log("___________________________________________");
// Reduce Method
const out = nums.reduce((res,cur)=>{
    return res+cur;
})
console.log(out);

console.log("___________________________________________");

// Q . We are the one array of marks of students filter out of marks of student that scored 90.

let smarks = [90,34,98,32,94,92,34];

let toppers = smarks.filter((val)=>{
    return val > 90 ; 
})
console.log(toppers);

console.log("___________________________________________");
// Q . Take a number n as a input from user create an array of number from one to n 
//     use reduced method to calculate some of all numbers in the array 
//     use the reduction method to calculate product of all numbers in an array.

let n = prompt("Enter a number");

let narr = [];

for(let i=1;i<=n;i++)
    {
        narr[i-1] = i ;
    }
console.log(narr);

let rval=narr.reduce((res,cur)=>{
    return res+cur;
});

console.log(rval);

let factorial=narr.reduce((res,cur)=>{
    return res * cur;
});
console.log(factorial);
