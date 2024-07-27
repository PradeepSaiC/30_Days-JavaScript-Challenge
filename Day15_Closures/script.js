// Day 15 : Closures 
// Activity 1 : Understanding Closures
// Task 1 : Write a function that returns another function , where the inner 
// function accesses a variable from the outer function scope , Call the inner 
// function and log the result 
function outer(){
    let a=20;
    function inner(){
        console.log(a);
    }
    return inner;
}
const hold=outer();
hold();
// Task 2 : Create a closure that maintains a private counter . Implement 
// functions to increment and get the current value of the counter . 

function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue()); 

// Activity 2 : Practical Closures 
// Task 3 : Writa a function that generates unique IDs . Use a closure to keep 
// track of the last generated ID and increment it with each call . 

function idGenerator() {
    let lastID = 0;

    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = idGenerator();

console.log(generateID());  
console.log(generateID());  
console.log(generateID());  

// Task 4 : Create a closure that captures a user's name and returns a function
// that greets the user by name . 

function greetPerson(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greeter=greetPerson("Praneeth");
console.log(greeter());

// Activity 3 : Closures in Loops 
// Task 5 : Write a loop that creates an array of functions . Each function should 
// log its Index when called . Use a closure to ensure each function logs the correct index .
function createFunctions(n) {
    const functions = [];

    for (let i = 0; i < n; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const functionsStorer= createFunctions(5);

functionsStorer[0]();  
functionsStorer[1]();  
functionsStorer[2]();  
functionsStorer[3]();  
functionsStorer[4]();  


// Activity 4 : Module Pattern 
// Task 6 : Use closures to create a simple module for managing a 
// collection of items , Implement methods to add , remove and list items . 

function createItems() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log("Items:", items.join(", "));
        }
    };
}

const itemManager = createItems();

itemManager.addItem("laptop");
itemManager.addItem("mobile");
itemManager.listItems();   
itemManager.removeItem("mobile");
itemManager.listItems();   
itemManager.removeItem("laptop");  


// Activity 5 : Memoization 

// Task 7 : Write a function that memmoizes the results of another function . 
// Use a closure to store the results of previous computations . 


// Task 8 : Create a memoized version of a function that calculates the factorial 
// of a number .

