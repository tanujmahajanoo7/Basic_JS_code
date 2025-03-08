// Immediately Invoked Function Expressions (IIFE)
//Is it used to avoid global scope pollution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Tanuj')

