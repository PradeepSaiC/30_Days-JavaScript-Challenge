// Activity 1 : Selecting and manipulating elements 
// Task 1 : Select an HTML element by an ID and change its text content 
let h1Elem=document.getElementById("text");
h1Elem.textContent="30 Days JS Challenge";

// Task 2 : Select an HTML element by a class and change its background color 
let h3Elem=document.getElementsByClassName("background")[0];
h3Elem.style.backgroundColor="#888";


// Activity 2 : Creating and Appending elements 
// Task 3 : Create an new div element with some text content and append it to the body
let divElem=document.createElement("div");
divElem.textContent="I'm a div element ";
document.body.appendChild(divElem);

// Task 4 : Create a new li element and add it to existing ul list 
let dayElem=document.createElement("li");
dayElem.textContent="Day9";
let dayElems=document.querySelector(".days");
dayElems.appendChild(dayElem);


// Activity 3 : Removing Elements 

// Task 5 : Select an HTML element and remove it from the DOM 
let pElem=document.querySelector(".paragraph");
pElem.remove();


// Task 6 : Remove the last child of a specific HTML element 
let lastElem=dayElems.lastElementChild;
lastElem.remove();

// Activity 4 : Modifying Attributes and classes 
// Task 7 : Select an HTML element and change one of its attributes (eg : src of an img tag ).
let imgElem=document.getElementById("image");
imgElem.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOLxfA1iCeSxG-yuVn_vIJxIapOE6W0zgXw&s")

// Task 8 : Add and remove a css class to and from an html elements 
let pElement=document.querySelector("#pelem");

setTimeout(()=>{
      pElement.classList.add("changeBg");
},5000);

setTimeout(()=>{
       pElement.classList.remove("changeBg");
},15000);

// Activity 5 : Event Handling 
// Task 9 : Add a click event listener to the button that changes the text content of paragraph
let paragraphElem=document.querySelector(".change-text");
let btnElem=document.querySelector(".change-p-text-btn");
btnElem.addEventListener("click",()=>{
    paragraphElem.textContent="Hey you have changed my text content";
});

// Task 10 : Add a mouseover event listener to an element that changes its border color . 
let changeBorderPElem=document.querySelector(".p-element");
changeBorderPElem.addEventListener("mouseover",()=>{
    changeBorderPElem.style.borderColor="#000";
})