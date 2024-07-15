// Activity 1: if-else statements 
// Task 1
// WAP to check if number is positive , negative or zero and log result 
let num=3;
if(num > 0){
    console.log(num,"is Positive");
}
else if(num === 0){
    console.log(num,"is zero");
}
else{
    console.log(num,"is negative");
}

// Task 2
// WAP to check if a person is eligible to vote (age >= 18) and log the result.
let age="19";
if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// Activity 2: Nested if-else statements 
// Task 3
// WAP to find greatest of three numbers using nested if else 
let numOne=34;
let numTwo=23;
let numThree=21;
if(numOne > numTwo){
    if(numOne > numThree){
        console.log(numOne,"is greater");
    }
}
else{
    if(numTwo > numThree){
        console.log(numTwo,"is greater");
    }
    else{
        console.log(numThree,"is greater");
    }
}


// Activity 3: switch case 
// Task 4:
// WAP that uses switch case to determine the day of the week based on Number (1-7)
// and log the day name to console .

let day=5;
switch(Number(day)){
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Satuarday");
        break;
    default:
        console.log("Enter a valid input");
        break;
}

// Task 5
// WAP that uses a switch case to assign a grade ('A','B','C','D','F') based on a 
// score and log the grade to the console

let marks=57;
switch(true){
    case (marks >= 90 && marks <= 100):
        console.log("A grade");
        break;
    case (marks >= 75 && marks <= 89):
        console.log("B grade");
        break;
    case (marks >= 55 && marks <= 74):
        console.log("C grade");
        break;
    case (marks >= 35 && marks <= 54):
        console.log("D grade");
        break;
    case (marks < 35):
        console.log("F grade");
        break;
    default:
        console.log("Please enter a valid input");
        break;
}

//Activity 4: Conditional (Ternary Operator)
// Task 6:
let number=20;
let res=(number % 2 === 0)?"It's Even number":"It's Odd number";
console.log(res);

// Activity 5: Combining Conditions 
// Task 7:
// WAP to check if year is leap year or not using multiple conditions 
// (divisible by 4 , but not 100 unless also divisible by 400)
let year=2024;

if(year % 4 === 0){
    if(year % 100 !== 0){
        console.log("its leap");
    }else{
        if(year %400 === 0){
            console.log("Its leap");
        }else{
            console.log("Not leap");
        }
    }
}
else {
    console.log("not leap");
}
