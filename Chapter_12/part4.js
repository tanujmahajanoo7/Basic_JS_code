//Async Await

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },1000);
    });
}

async function getWeatherApi(){
    await api();
    await api();
}

console.log(getWeatherApi());


//Async Await

function getData(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");
        },3000);
    });
}

(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();

// console.log(getAllData()); //Instead of this we will use IIFE