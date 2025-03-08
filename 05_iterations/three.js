// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// ---------------------------------------------------------------------

// Maps    //Used for unique keys

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('1', "2")
map.set('1', "1")
map.set('2', "1")


// console.log(map);

for (const [key, value] of map) {       //[key,value] is new syntax
    // console.log(key, ':-', value);
}


// for of is not used in object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
// }