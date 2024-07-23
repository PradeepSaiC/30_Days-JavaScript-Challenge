// Activity 1 : Understanding Promises 
// Task 1: Create a promise that resolves with a message after a 2 second timeout and 
// log the message to the console.
function createPromise(){
    return new Promise(function executor(resolve,reject){
        setTimeout(() => {
        resolve("Promise got resolved");
        },2000);
    });
}

const p = createPromise();
p.then(function resolveHandler(value){
    console.log(value);
})

// Task 2 : Create a promise that rejects with an error message after a 2-second timeout 
// and handle error using .catch()
const promise=new Promise(function exec(resolve,reject){
    setTimeout(()=>{
        reject(new Error("An Error occured"));
    },2000)
});
promise.catch(function handler(e){
    console.log(e.message);
});

// Activity 2 : Chaining Promises 
// Task 3: Create a sequence of promises that stimulate fetching data from a server . 
// Chain the promises to log messages in a specific order .
const fetchData = (data , delay) => {
    return new Promise(function exec(resolve,reject){
        setTimeout(()=>{
            resolve(data);
        },delay);
    });
}
fetchData("Fetching Data from server 1",2000).then(
    function resolveHandler1(msg){
        console.log(msg);
        return fetchData("Fetching Data from server 2",1000);
    }
).then(
    function resolvedHandler2(msg){
        console.log(msg);
        return fetchData("Fetching Data from server 3",2000);
    }   
).then(
    function resolveHandler3(msg){
        console.log(msg);
    }
).catch((error) => {
    console.log(error.message);
});

// Activity 3: Using Async / await
// Task 4: Write an async function that waits for a promise to resolve and then 
// logs the resolved value. 
const checkStatus=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Downloaded");
        },2000)
    });
}

const logValue = async () => {
    try{
        const res =await checkStatus();
        console.log(res);
    }
    catch(error){
        console.log(error.message);
    }
}
logValue();

// Task 5: Write an async function that handles a rejected promise using try - catch
// and log the error message .
const checkStatusWithError=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("An Error occured while downloading"));
        });
    })
}
const displayValue= async () =>{
    try{
        const res= await checkStatusWithError();
        console.log(res); 
    }
    catch(error){
        console.log(error.message);
    }
}
displayValue();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response 
// dota to the console using promises 

const fetchApi=()=>{
    const URL=fetch ('https://jsonplaceholder.typicode.com/posts');
    URL.then((response)=>{
        if(!response.ok){
            throw new Error ("Network response was not ok",response.statusText);
        }
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log("Problem in fetching the data");
    });   
}

fetchApi();

// Task 6: Use the fetch API to get data from a public API and log the response 
// dota to the console using async await

const fetchApiData = async ()=>{
    try{
    const data =await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!data.ok){
        throw new Error("Network response was not ok",data.statusText);
    }
    const info=await data.json();
    console.log(info);
    }
    catch(error){
        console.log("There is a problem in fetching data",error.message);
    }
}
fetchApiData();

// Activity 5: Concurrent Promises 
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all 
// thier values .
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
    },1000);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved");
    },2000);
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolved");
    },500);
});
Promise.all([p1,p2,p3]).then(
    function handle(values){
        console.log(values);
    }
).catch((err)=>{
    console.log("One or more promise got rejected",err.message);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves 
// among multiple promises.

Promise.race([p1,p2,p3]).then(
    function handler(value){
        console.log("first resolved Promise",value);
    }
).catch((error)=>{
    console.log("A Promise rejected",error.message);
});