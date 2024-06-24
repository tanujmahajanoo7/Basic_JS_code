let pendingpromise = new Promise((resolve,reject)=>{
    console.log("Promise pending");
})

let resolvepromise = new Promise((resolve,reject)=>{
    console.log("Promise resolve");
    resolve(123);
})

let rejectpromise = new Promise((resolve,reject)=>{
    console.log("Promise removed");
    reject("some error occured mt");
})

console.log(pendingpromise);
console.log(resolvepromise);
console.log(rejectpromise);


function getData(dataId,getNextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess");
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    });
}
//promise before the getdata 
let promise = getData(123);
console.log(promise);
//promise after the getdata

console.log("*****************************");
//promise chaining

getData(1)
    .then((res)=>{
        console.log("getting data1 ...");
        return getData(2);
    })
    .then((res)=>{
        console.log("getting data2 ...");
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    });