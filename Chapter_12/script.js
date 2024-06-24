console.log("one");
function hello()
{
    console.log("Msg after some seconds");
}

setTimeout(hello,3000); // set timeout for 4 mili-second

console.log("two");

setTimeout(()=>{
    console.log("Msg after some more seconds");
},5000); //timeout

console.log("three");

console.log("-------------------------------------------");
//callback functions

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

calculator(1,2,(a,b)=>{
    console.log(a+b);
});

const time = () => {
    console.log("Hello");
}

setTimeout(time,3000);

console.log("-------------------------------------------");

function getData(dataId,getNextData)
{
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData)
            {
                getNextData();
            }
    },2000);
}

//callback hell

// getData(1,getData(2));
getData(1,()=>{
    console.log("Getting data 2 .....");
    getData(2,()=>{ 
        console.log("Getting data 3 .....");
        getData(3,()=>{
            console.log("Getting data 4 .....");
            getData(4);
        });
    });
});

console.log("-------------------------------------------");