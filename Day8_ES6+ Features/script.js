// Activity 1 : Tamplate Literals

// Task 1 : Use template literals to create a string that includes variables for a person's name
// and age ,and log the string to the console

let name="Pradeep";
let age=19;
let templateStr=`${name} is ${age} years old.`;
console.log(templateStr);

// Task 2 : Create a multi-line string using template literals and log it to the console 
let multiStr=`This is a string
which is multi lined`;
console.log(multiStr);

// Activity 2 : Destructuring 
// Task 3 : Use array destructuring to extract the first and second element from an array
// numbers and log them to the console 
let arr=[1,2,3,4,5];
let [one,two] = arr;
console.log("First Element",one);
console.log("Second Element",two);


// TAsk 4 : Use Object destructuring to extract the titile and author from a book object and 
// log them to the console 
let bookObj={
    title : "A suitable boy",
    author : "Vikram Seth"
}
let {title,author} = bookObj;
console.log(title);
console.log(author);

//Activity 3 : Spread and rest Operators 
// Task 5 : Use the spread operator to create a new array that includes all elements of an existing 
// array plus additioal elements ,and log the new array to the console.

let existingArr=[1,2,3,4];
let newArr=[...existingArr,5,6,7,8,9];  //spread
console.log(newArr);

// TAsk 6 : Use the rest operator in a function to accept an arbitary number of arguments,
// sum them and return result . 
function sum(...argsArr){         //rest
    let add=0;
    for(const e of argsArr){
        add=add+e;
    }
    return add;
}

let res=sum(1,2,3,4,5);
console.log(res);

// Activity 4 : Default Parameters
// Task 7  : Write a function that takes two parameters and returs their product ,with the second 
// parameter having a default value of 1 . log the result of calling this function with and 
// without the second parameter.

const product = function (a,b=1){
    return a*b;
}
console.log(product(5));
console.log(product(10,5));

// Activity 5 : Enhanced Object literals 
// TAsk 8 : Use enhanced object literals to create an object with methods and properties ,and log 
// the object to the console 

let personName="Pradeep";
let personAge=19;
let personLoc="Bengaluru";

const personObj={
    personName,
    personAge,
    personLoc,
    info(){
        return `Person ${this.personName} is ${this.personAge} years old and lives in ${this.personLoc}`;
    }
}
console.log(personObj);

// TAsk 9 : Create an object with computed property names based on variables and log the object to the 
// console 

const employeeObj={
    empName:"Pradeep",
    empId:"20",
    empAge:19,
    ["greet"+"Employee"](){
        return `Hey ${this.empName} , welcome to the job , Your Id is ${this.empId}`;
    }
}
console.log(employeeObj);
