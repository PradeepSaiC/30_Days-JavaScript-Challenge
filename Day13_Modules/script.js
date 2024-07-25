// Activity 1 : Creating and Exporting Modules
// Task 1 : Create a module that exports a function to add two numbers .import and use 
// this module in another script 
const a=10;
const b=23;
const sum= require('./adder.cjs');
console.log(sum(a,b));

// Task 2 : Create a module that exports an object representing
// a person with properties and methods.Import and use this module in another script .

const personObj=require('./person');
console.log(`Person named ${personObj.firstName} ${personObj.lastName} is ${personObj.age} years old`);
personObj.getStatus();
personObj.getMobileNumber();
// Activity 2 : Named and Default Exports 
// Task 3 : Create a module that exports multiple functions using named exports.
// Import and use these functions in another script . 

const Operations = require('./calc');
const n1=30;
const n2=10;
console.log(Operations.addNums(n1,n2));
console.log(Operations.diffNums(n1,n2));
console.log(Operations.productNums(n1,n2));
console.log(Operations.divideNums(n1,n2));
console.log(Operations.moduloNums(n1,n2));

// Task 4 : Create a module that exports a single function using default export . Import
// and use this function in another script . 
import sayHello  from './sayHello.js';
console.log(sayHello());
// Activity 3 : Importing Entire Modules 
// Task 5 : Create a module that exports multiple constants and functions. 
// Import the entire module as an object in another script and use its properties. 


// Activity 4 : Using Third-Party Modules 
// Task 6 : Install a third-party module (e.g.lodash) using npm. Import and use a function
// from this module in a script 

// Task 7 : Install a third-party module (eg.axios) using npm,Import and 
// use this module to make a network request in a script . 

