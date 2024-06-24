let marks = [70,92,93,93];
console.log(marks);
console.log(typeof(marks));

marks[0]=99;
console.log(marks);

for(let i of marks)
    {
        console.log(i);
    }

console.log("--------------------------------------------------------------------------------------");
    
// Q. Find the average marks of given array

let mark = [85,97,44,37,76,60];

let len = mark.length;
let sum = 0;
for(let i of mark)
    {
        sum=sum+i;
    }

let avg = sum/len;

// console.log("average of giver marks is" ,avg);
console.log(`average of giver marks is ${avg}`);

// Q. for an given item 10 percent discount on each item chang the array after applying discount

let item = [250,645,300,900,50];

let idx = 0;
for(let i of item)
    {
        let dis=0;
        dis = i*(10/100);
        item[idx]=item[idx]-dis;
        idx++;
    }
console.log(item);

console.log("--------------------------------------------------------------------------------------");


// Array Methods

let fruit = ["apple","banana","mango","watermelon"];

console.log(fruit);

fruit.push("Lemon")
console.log("added lemon fromm back using push method", fruit);

fruit.pop();
console.log("remove lemon from back using pop method", fruit);

console.log(fruit.toString());

let marray = mark.concat(fruit);
console.log(marray);

fruit.unshift("Lemon");
console.log("Fruit array after using unshift method:",fruit);

fruit.shift();
console.log("Fruit array after using shift method:",fruit);


console.log("Fruit after slice operation", fruit.slice(1,3));

let num = [0,1,2,3,4,5];
console.log("original array" ,num);
// splice(Starting Index,   Number of element want to delete,   Replaced ELement )
num.splice(1,3,101,102,103)
console.log("num array after splice operation",num);


console.log("--------------------------------------------------------------------------------------");

// Q. create an array to store companies name Bloomberg Microsoft Uber Google IBM Netflix 

// Remove the fist company from the item 

// Remove uber add Ola

// Add Amazon at last

let companies = ["Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(0,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

