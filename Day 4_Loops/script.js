// Activity 1: For loop 
// Task 1:
// Write a program to print numbers from 1 to 10 using for loop.
for(let i=1;i<=10;i++){
    console.log(i);
}
// Task 2:
// Printing multiplication table of 5 using for loop 
for (let i=1;i<=10;i++){
    console.log(`5 X ${i} = `,5*i);
}

// Activity 2: While loop 
// Task 3:
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop 
let sum=0;
let i=1;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("Sum =",sum);

// Task 4:
// Write a program to print numbers from 10 to 1 using while loop 
let num=10;
while(num>=1){
    console.log(num);
    num=num-1;
}

// Activity 3: Do While Loop 
// Task 5:
// Write a program to print numbers from 1 to 5 using do while loop 
let j=1;
do{
    console.log(j);
    j++;
}while(j <= 5);

// Task 6:
// Write a program to find factorial of a number using do while 
let fact=1;
let number=5;
let k=1;
do{
    fact=fact * k;
    k++;
}while(k <= number);
console.log(`Factorial of number ${number} is ${fact}`);


// Activity 4: Nested loops 
// Write a program to print the following pattern using nested for loop
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

for(let r=1;r<=5;r++){
    for(let c=r;c<=r;c++){
        let stars="* ".repeat(c-1);
        console.log(stars);
    }
}

// Activity 5: Loop Control Statements 
// Task 8:
// Write a program to print numbers from 1 to 10 but skip the number 5 using the continue statement 
for(let i=1;i<=10;i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Task 9:
// Write a program to print numbers from 1 to 10 but stop the loop when the number is 7 using break statement 
for(let i=1;i<=10;i++){
    if(i === 7){
        break;
    }
    console.log(i);
}