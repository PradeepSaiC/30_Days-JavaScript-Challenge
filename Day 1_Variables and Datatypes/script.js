// Activity 1- Variable Declarations 

// Task 1: Declare a variable using var ,assign it a number ,and log the value to the console 
var a=20;
console.log(a);

// Task 2: Declare a variable using let ,assign it a string ,and log the value to the console 
var str="Hello JS";
console.log(str);

// Activity 2- Constant Declarations 
// Task 3: Declare a variable using const ,assign it a boolean value ,and log the value to the console 
const valTrue=true;
const valFalse=false;
console.log(valTrue);
console.log(valFalse);

// Activity 3- Data Types
// Task 4: Craate variables of different datatypes(number ,string ,boolean ,object,array) and log each variable's
// type using typeof operator 

let numVal=34;
let strVal="JS 30 Days Challenge Accepted";
let boolVal=true;
let objVar={
    name:"Object",
};
let arr=[1,2,"Js",true];
console.log(typeof numVal);
console.log(typeof strVal);
console.log(typeof boolVal);
console.log(typeof objVar);
console.log(typeof arr);


// Activity 4- Reassigning values 
// Task 5: Declare a variable using let,assign it an initial value,reassing a new value ,and log both 
// values to the console 
let value=34;
console.log("Initial value:",value);
value="Hello js";
console.log("Reassinged value:",value);

// Activity 5- Understanding const 
// Task 6- Try reassigning a variable declared with const and observe the error 
const num=90;
num=3; //reassigning a const variable
console.log(num);

//Type error:Assignment to constant variable

// Feature request 
// Declare the variables of different data types and log both value and type of each variable 
// into the console
let valNum=45;
let valStr="Hello Js";
let valBool=true;
let valObj={
    name:"I'm an Object"
};
let array=[3,"helo",true,false];

console.log("The value ",valNum," is of ",typeof valNum);
console.log("The value ",valStr," is of ",typeof valStr);
console.log("The value ",valBool," is of ",typeof valBool);
console.log("The value ",valObj," is of ",typeof valObj);
console.log("The value ",array," is of ",typeof array);

// Demonstrate the difference between let and const when it comes to reassignment 
let x=34;
x=43;  //can be reassigned
const y=3;
y=89; //cannot be reassigned 