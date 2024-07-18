// Activity 1:Array creation and access 
// Task1:create an array of numbers from 1 to 5 and log the array to the console 
let arr=[1,2,3,4,5];
console.log(arr);

// Task2:Access the first and last elements of the array and log them 
console.log(arr[0]);
console.log(arr[arr.length-1]);

// Activity 2: Array methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log 
// the updated array
arr.push(6);
console.log(arr);

// Task 4: Use the pop method to remove a last element from the array and log the updated array 
arr.pop()
console.log(arr);

// Task 5: Use shift method to remove first element from the array 
arr.shift();
console.log(arr);

// Task 6:Use unshift method to add a new element at beginning of the array 
arr.unshift(1);
console.log(arr);

// Activity 3: Array methods (Intermediate)
// Task 7 : Use map method to create a new array where each number is doubled and log 
let newArr=arr.map((e)=>(e*2));
console.log(newArr);

// Task 8: Use filter method to create a new array with only even numbers in the array 
let evenArr=arr.filter((e)=>( e%2 === 0));
console.log(evenArr);

// Task 9 : Use reduce method to calculate sum of all numnbers in arra and log the res 
let sum=arr.reduce((acc,cur)=> acc+cur,0);
console.log(sum);

// Activity 4: Array Iteration 
// Task 10:  Use for loop to iterate over the array 
for(let i=0 ;i<=arr.length-1;i++){
    console.log(arr[i]);
}

// TAsk 11: Use forEach method to iterate over the array and log the elements 
arr.forEach((e)=>{
    console.log(e);
})

// Activity 5: Multi dimensional arrays
// TAsk 12 : Create a multi dimensional array and log it 
let arr2D =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr2D);

// TAsk 13: Access a specific element from multidimensional array 
console.log(arr2D[1][1]);