// Activity 1 : Object creation and access 
// TAsk 1: Create an Object representing a book with properties like 
// title , author , and year and log the object to the console 

const bookDetails={
    title : "Programming In C: A Practical Approach",
    author : "Ajay Mittal",
    year : 2010,
    info : function (){
        return `Title : ${this.title} \nAuthor : ${this.author}`;
    },
    updateYear : function (year){
        this.year = year;
    },
    library : {
        name:"State Central Library",
        books:[
            {
                title: "The Adventures of Tom Sawyer",
                author: "Mark Twain"
            },
            {
                title: "Treasure Island",
                author: "Robert Louis Stevenson"
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen"
            }
        ],
    },
    getTitleYear: function () {
        return `Title : ${this.title} \nYear : ${this.year}`
    }
};

console.log(bookDetails);


// TAsk 2: Access and log the title and author properties of the book 
console.log(
`Title : ${bookDetails.title}
Author : ${bookDetails.author}
`);


// Activity 2 : Object Methods
// Task 3 : Add a method to the book object that returns a string with the book's 
// title and author ,and log the result of calling this method 
console.log(bookDetails.info());

// Task 4 : Add a method to a book object that takes a parameter (year) amd updates the 
// book's year property ,then log the updated object.
bookDetails.updateYear(2013);
console.log(bookDetails);

// Activity 3 : Nested Objects 
// Task 5 : Create a nested object representing a library with properties like name and 
// books (an array of book objects ) and log the library object to the console 
console.log(bookDetails.library);

// TAsk 6: Access and log the name of the library and the titles of all the books in the library 
console.log(bookDetails.library.name);
for(const bookObj of bookDetails.library.books){
    console.log(bookObj.title);
}

// Activity 4: this keyword 
// Task 7: Add a method to the book object that uses the this keyword
// to return a string with the books title and year ,and log the result of calling this method. 
console.log(bookDetails.getTitleYear());

// Activity 5: Object Iteration 
// Task 8: Use a for..in loop to iterate over the properties of the book Object
// and log each property and its value .
for (const property in bookDetails){
    console.log(`The property ${property} has the value ${bookDetails[property]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book 
// object .
console.log("Keys of bookDetails Object are:");
console.log(Object.keys(bookDetails));
 
console.log("Values of bookDetails Object are:");
console.log(Object.values(bookDetails));
