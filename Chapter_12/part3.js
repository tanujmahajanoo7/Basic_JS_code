// promises
// .then & . catch

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("Comment out only at one");
        // resolve("sucess");
        // reject("some error occurred mt");
    });
};

let promise = getPromise();

promise.then((res)=>{
    console.log("promise fulfilled",res);
})

promise.catch((err)=>{
    console.log("rejected",err);
})

function asyncFunc()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 0");
            resolve("Success");
        },4000);
    });
}

console.log("Fetching data 0");
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
})

console.log("*****************************");
//Promise chaining

function asyncFunc1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("Success");
        },4000);
    });
}
function asyncFunc2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("Success");
        },4000);
    });
}

console.log("Fetching data 1");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("Fetching data 2");
    asyncFunc2().then((res)=>{
        console.log(res);
    }); 
})

console.log("*****************************");
