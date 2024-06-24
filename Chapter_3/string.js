let str = "Hello I am Student";
console.log(str);

console.log(str.length);

console.log("String at index 0:",str[0]);


// Template literal
let obj={
    item: "pen",
    price: 20,
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log(`The result is ${1+1+1}`);


// escape character
console.log("Maza \nMango");
console.log("Maza \tMango");


// string methods
str = "Mango is mango";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "        Mango is    mango        ";
console.log(str.trim());

str = "0123456789";

console.log("String lenght from 1 to 6:",str.slice(1,6));
console.log("String length from 1 to end:",str.slice(1));

let str1="Hey";
let str2="Hello";
console.log("Concatenation of 2 strings",str1.concat(str2));
let tem  = "hello" + 10;
console.log("Concatenation of string and integer",tem);

str = "0111113456789";

console.log("Replace char 1 by 0 at only one place:",str.replace("1","0"));
console.log("Replace char 1 by t at only all place:",str.replaceAll("1","t"));

console.log("Char at index 8:",str.charAt(8));

