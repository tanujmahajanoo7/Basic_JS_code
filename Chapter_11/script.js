const student={
    fullName:"John doe",
    marks:90,
    printMarks: function (){
        console.log("marks:",this.marks);
    }
};


console.log(student);
console.log(student.fullName);
console.log(student.marks);
student.printMarks();

const tax={
    taxPaid(){
        console.log("Your have to paid 5% tax");
    },
};

const emp1={
    salary:1000,
};

const emp2={
    salary:1000,
} 
const emp3={
    salary:1000,
    taxPaid(){
        console.log("Your have to paid 20% tax");
    },
};

emp1.__proto__=tax;
emp2.__proto__=tax;
emp3.__proto__=tax;

console.log(emp1.taxPaid());
console.log(emp2.taxPaid());
console.log(emp3.taxPaid());

console.log("***********************************");
//Classes

class Toyota{
    constructor(){
        console.log("Creating new obj");
    }
    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }
    setbrand(brand)
    {
        this.brandName=brand;
    }
}

let fortuner = new Toyota();

console.log(typeof fortuner);

console.log(fortuner.start());

console.log(fortuner.setbrand("fortuner"));
console.log(fortuner);

console.log("***********************************");
//Inheritance

class parent{
    hello(){
        console.log("Hello");
    }
}

class child extends parent{}

let obj = new child();

console.log(obj.hello());

console.log("***********************************");
//super keyword

class Person{
    constructor()
    {
        console.log("Enter parent constructor");
        this.sprcies="homo species";
    }
    eat()
    {
        console.log("eat");
    }
}

class engineer extends Person{
    constructor(branch)
    {
        console.log("Enter child constructor");
        super(); //To invoke the parent class constructor
        this.branch=branch;
        console.log("Exit child constructor");
    }
    work()
    {
        console.log("Solve problem, build something");
    }
}

let engobj = new engineer("Computer Engineer");

console.log("***********************************");
//Error Handling

let a=5;
let b=5;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try{
    console.log("a+c=",a+c);
}
catch(err){
    console.log(err);
}
console.log("a*b=",a*b);





console.log("*****************end******************");