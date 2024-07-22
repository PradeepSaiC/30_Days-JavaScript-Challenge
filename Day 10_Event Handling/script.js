// Activity 1 : Basic Event Handling 
// Task 1 : Add a click event listener to a button that changes the text content of a 
// paragraph. 

let pElem=document.querySelector(".text");
let changeBtn=document.querySelector(".change-text");
changeBtn.style.cursor="pointer";
changeBtn.addEventListener("click",()=>{
    pElem.textContent="My text content got changed";
})
// Task 2 : Add a double click event listener to an image that toggles its visibility 

let imgElem=document.querySelector(".image");
document.body.addEventListener("dblclick",() => {
    if(imgElem.style.display === "none"){
        imgElem.style.display="block";
    }
    else{
        imgElem.style.display="none";
    }
})

// Activity 2 : Mouse Events 
// Task 3 : Add a mouseover event listener to an element that changes its background color 
let divElem=document.querySelector(".changeBg");
divElem.addEventListener("mouseover",() => {
    divElem.style.backgroundColor="#875";
})

// Task 4 : Add a mouseout event listener to an element that resets it background color . 
divElem.addEventListener("mouseout",()=> {
    divElem.style.backgroundColor="#888";
})

// Activity 3 : Key board Events 
// Task 5 : Add a keydown event listener to an input field that logs the key pressed to the 
// console 
let inputElem=document.querySelector(".grab-input");
inputElem.addEventListener("keydown",(event) => {
    console.log(`Key pressed : ${event.key}`);
});

// Task 6 : Add a keyup event listener to an input field that displays the current 
// value in the paragraph. 
let displayTextElem=document.querySelector(".get-text");
inputElem.addEventListener("keyup",(event)=>{
    displayTextElem.textContent = inputElem.value;
})

// Activity 4 : form events 
// Task 7 : Add a submit event listener to a form that prevents the default 
// submission and logs the form data to the console 
let formElem=document.querySelector("#inputData");
formElem.addEventListener("submit",(event) => {
    event.preventDefault();
    let formData = new FormData(formElem);
    for(const [key,value] of formData){
        console.log(`key : ${key} , Value : ${value}`);
    }
});

// Task 8 : Add a change event listener to a select dropdown that displays the selected
// value in a paragraph

let displayText=document.querySelector(".display-text");
let selectCourseElem=document.querySelector("#courseList");
selectCourseElem.addEventListener("change",()=>{
    displayText.textContent = `Selected course is ${selectCourseElem.value}`;
});


// Activity 5 : Event Delegation 
// Task 9 : Add a click event listener to a list that logs the text content of the 
// clicked list item using event delegation 

let listElem=document.querySelector(".list");
listElem.addEventListener("click",(event) => {
    if(event.target && event.target.nodeName === "LI"){
        console.log(event.target.textContent);
    }
})

// Task 10 : Add an event listener to a parent element that listens for events from 
// dynamically added child elements 
let parentElem=document.querySelector(".parent");
let btn=document.querySelector(".addChild");
btn.addEventListener("click",()=>{
    let newElem=document.createElement("div");
    newElem.classList.add("child");
    newElem.textContent=`Child element ${parentElem.childElementCount}`;
    parentElem.appendChild(newElem);
});
