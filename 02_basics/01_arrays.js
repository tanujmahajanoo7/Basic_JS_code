// array

let myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));     // false
// console.log(myArr.indexOf(3));      // 3

const newArr = myArr.join() //convert into string

// console.log(myArr);  
    // [
    //     0, 1, 2, 3,
    //     4, 5, 7
    // ]
// console.log(newArr);        // 0,1,2,3,4,5,7


// slice, splice

myArr = [0, 1, 2, 3, 4, 5]

// console.log("A ", myArr);   //A  [ 0, 1, 2, 3, 4, 5 ]
// console.log("B ", myArr);   //B  [ 0, 1, 2, 3, 4, 5 ]
// console.log("C ", myArr);   //C  [ 0, 4, 5 ]

const myn1 = myArr.slice(1, 3)

// console.log(myn1);          // [ 1, 2 ]

const myn2 = myArr.splice(1, 3)
// console.log(myn2);          // [ 1, 2, 3 ]