// Activity 1 : Basic Error Handling with try - catch 
// Task 1 : Write a function that intentionally throws an error and use try - catch
// block to handle the error and log an appropriate message to the console 

function errorHandler(){
    try{
        throw new Error("This is an intentionally thrown error");
    }
    catch(error){
        console.log("Error :",error.message);
    }
}
errorHandler();

// Task 2 : Create a function that divides two numbers and throws an error if the denominator 
// is zero .Use try - catch block to handle the error 
function divideTwoNums(numerator,denominator){
    try{
        if(denominator === 0){
            throw new Error("Division by Zero error");
        }
        console.log(numerator/denominator);
    }
    catch(error){
        console.log("Error :",error.message);
    }
}
divideTwoNums(21,4);
divideTwoNums(10,0);

// Activity 2 : Finally Block 
// Task 3 : Write a script that includes a try catch block and a finally block .
// log messages in the try , catch and finally to observe the execution flow .

function sampleFn(){
    try{
        console.log("In try block");
        throw new Error("An intentionally made error");
    }
    catch(error){
        console.log("In catch block");
        console.log("Error : ",error.message);
    }
    finally{
        console.log("In finally block");
    }
}

sampleFn();

// Activity 3: Custom Error Objects 
// Test 4 : Create a custom error class that extends the built-in error class . Throw an instance of this 
// custom error in a function and handle it using try catch block .

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name="Custom Error";
    }
}
function handleCustomError(){
    try{
        throw new CustomError("A Custom Error");
    }
    catch(error){
        if(error instanceof CustomError){
            console.log("Custom Error :",error.message);
        }else{
            console.log("An Error:",error.message);
        }
    }
}
handleCustomError();

// Task 5 : Write a function that validates user input (eg . checking if a string is not empty)
// and throws a custom error  if the validation fails . Handle the custom error using try -catch block .
class ValidateInput extends Error{
    constructor(message){
        super(message);
        this.name="Validation Error";
    }
}

function inputValidator(input){
    try{
        if(input.trim() === ""){
            throw new ValidateInput("Input cannot be Empty");
        }
        console.log("Input is valid");
    }
    catch(error){
        if(error instanceof ValidateInput){
            console.log("Validation Error : ",error.message);
        }
        else{
            console.log("Error :",error.message);
        }
    }
}
inputValidator("");
inputValidator("  ");
inputValidator("hello there");


// Activity 4 : Error Handling in Promises 
// Task 6 : Create a promise that randomly resolves or rejects . Use .catch() to handle
// the rejection and log an appropriate message to the console.
function generateZeroOrOne(){
    return Math.floor(Math.random() * 2);
}
function handlePromise(){
    return new Promise((resolve,reject) => {
        if(generateZeroOrOne()){
            resolve("Resolved");
        }
        else{
            reject(new Error("Promise Rejected"));
        }
    });
}
let p=handlePromise();
p.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error.message);
});

// Task 7 : Use try - catch within an async function to handle errors from a promise that 
// randomly resolves or rejects ,and log the error message 
const promiseHandler = async () =>{
    try {
        let msg=await handlePromise();
        console.log(msg);
    }
    catch(error){
        console.log(error.message);
    }
}
promiseHandler();

// Activity 5 : Graceful Error Handling in fetch 
// Task 8 : Use the fetch API to request data from an invalid URL and handle the error 
// using .catch() log the appropriate error message to the console 

const URL="http://invalidurl.com";

fetch(URL).then((response) =>{
    if(!response.ok){
        throw new Error(`Network response was not ok ${response.statusText}`);
    }
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error.message);
});



// Task 9 : Use the fetch API to request data from an invalid URL within an async function 
// and handle the error using try - catch . Log an appropriate error message . 
const fetchInvalidApi= async()=>{
    const Url="https://invalidurl.in";
    try{
        const response= await fetch(Url);
        if(!response.ok){
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data=response.json();
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}

fetchInvalidApi();