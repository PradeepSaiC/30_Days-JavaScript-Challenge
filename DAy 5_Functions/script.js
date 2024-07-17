// Activity 1: Function Declaration 
// Task 1: Write a function to check if a number is even or odd and log result to 
// console

function checkForEvenOrOdd(num){
    if(num%2 === 0){
        console.log(num,"is even");
    }
    else{
        console.log(num,"is odd");
    }
}
checkForEvenOrOdd(22);

// Task 2: Write a function to calculate square of a number and return the result 
function calculateSquare(num){
    return num*num;
}
console.log(calculateSquare(3));

// Activity 2: Function Expression 
// Task 3: Write a function to find maximum of two numbers and log the result to console 
const findMax = function ( a , b ){
    if( a > b ){
        console.log(a,"is greater than",b);
    }
    else {
        console.log(b,"is greater than",a);
    }
}
findMax(10,23);

// Task 4:Write a function to concatenate two strings and return the result 
const concatStrings= function (fName , lName){
    return fName + " " + lName;
}
let firstName="Sai";
let lastName="Pradeep";
console.log(concatStrings(firstName,lastName));

// Activity 3: Arrow functions
// Task 5: Write an arrow function to calculate sum of two numbers and return result 
const calcSum = (a, b) =>  {
    return a+b;
}
console.log(calcSum(20,23));

// Task 6 : Write an arrow function to check if a string contains a specific character 
// and return a boolean value 

const checkForChar = (str) => {
    return str.includes("r");
}
console.log(checkForChar("Sai Pradeep"));

// Activity 4: Function Parameters and Default values 
// Task 7: Write a function that takes two parameters and returns their product. 
// provide a default value 

const calcProduct = ( a , b=10) => {
    return a*b;
} 
console.log(calcProduct(3));

// Task 8: Write a function that takes a person's age and name ,returns a greeting 
// message , provide default value for age 
const greet= (name , age=19) =>{
    return `Welcome ${name} ,Your age is ${age}`;
}
console.log(greet("pradeep"));


// Activity 5: Higher Order Functions 
// Task 9: Write a higher-order function that takes a function and number ,and calls 
// the function that many times 

function sayHello(){
    console.log("Hello");
}

function hof(sayHello , number){
    for(let i=1 ; i<=number ;i++){
        sayHello();
    }
}

hof(sayHello,5);

// Task 10: Write a higher-order function that takes two functions and a value,
// applies the first function to the value ,and applies the second function to result.

function add(a,b){
    return a+b;
};
function multiply(val){
    return val*10;
}
function higherOrderFn(addfn,mulFn,val){
    let sum=addfn(5,val);
    let result = mulFn(sum);
    console.log(result);
}
higherOrderFn(add,multiply,5);