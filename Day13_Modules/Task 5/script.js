// Activity 3 : Importing Entire Modules 
// Task 5 : Create a module that exports multiple constants and functions. 
// Import the entire module as an object in another script and use its properties. 
import * as mathOperation from './mathOperations.js'
console.log("Value of PI:",mathOperation.PI);
console.log("Value of E:",mathOperation.E);
const sum=mathOperation.add(23,13);
console.log("sum:",sum);
const sub=mathOperation.sub(23,12);
console.log("Difference:",sub);
const multiply=mathOperation.product(21,10);
console.log("Product :",multiply);
const divideNums=mathOperation.divide(12,2);
console.log("division :",divideNums);