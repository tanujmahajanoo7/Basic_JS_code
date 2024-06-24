// Loops
// for loop
for(let i=1;i<=5;i++)
    {
        console.log("Hello",i);
    }

// while loop
let i=1;
while(i<=5)
    {
        console.log(i);
        i++;
    }

// do while loop
i=1;
do{
    console.log("Hey");
    i++;
} while(i<=5);

// for of loop use for string and arrays
let str = "Maza mango";
for(let i of str)
    {
        console.log(i);
    }

// for in loop use for objects
let student={
    name:"Vishal",
    roll: 7,
    age: 20,
    cgpa : 7.9,
};
for(let i in student)
    {
        console.log(i,":", student[i]);
    }