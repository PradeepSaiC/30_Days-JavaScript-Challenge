// Day 16 : Recursion 
// Activity 1 : Basic Recursion 
// Task 1 : Write a recursive function to calculate the factorial of a Number.
// log the result for a few test cases . 
function calcFactorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n*calcFactorial(n-1);
}
const res=calcFactorial(5);
console.log(res);
// Task 2 : Write a recursive function to calculate the nth Fibonacci number . 
// log the result for a few test cases . 
function calcFibonacci(n){
    if(n <= 1){
        return n;
    }
    return calcFibonacci(n-1) + calcFibonacci(n-2);
}

const fibonacciRes=calcFibonacci(10);
console.log(fibonacciRes);

// Activity 2 : Recursion with Arrays 

// Task 3 : Write a recursive function to find the sum of all elements in an array . Log 
// the result for a few test cases . 
function sumOfArr(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumOfArr(arr.slice(1));
}
console.log(sumOfArr([1,2,3,4,5]));

// Task 4 : Write a recursive function to find the maximum element in an array . 
// Log the result for a few text cases . 
function findMaxElem(arr){
    if(arr.length === 1){
        return arr[0];
    }
    let maxResult=findMaxElem(arr.slice(1));
    return arr[0] > maxResult ? arr[0] : maxResult
}
console.log(findMaxElem([4,21,45,23,10]));

// Activity 3 : String Manipulation with Recursion 
// Task 5 : Write a recursive function to reverse a string . Log the 
// result for a few test cases . 
function reverseStr(str){
    if(str.length <= 1){
        return str;
    }
    return str[str.length-1] + reverseStr(str.slice(0,-1));
}
console.log(reverseStr("Hello"));

// Task 6 : Write a recursive function to check if a string is a palindrome . 
// log the result for a few test cases . 
function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    return isPalindrome(str.slice(1,-1));
}
console.log(isPalindrome("121"));

// Activity 4 : Recursive Search 
// Task 7 : Write a recursive function to perform a binary search on a sorted array . 
// Log the index of the target element for a few test cases . 
function binarySearch(arr,key,left=0,right=arr.length-1){
    if(left > right){
        return -1;
    }
    const mid = Math.floor((left+right)/2);
    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] > key){
        return binarySearch(arr, key ,left ,mid-1);
    }
    else{
        return binarySearch(arr,key , mid+1,right);
    }
}

console.log(binarySearch([1,2,3,4,5],3),"index");

// Task 8 : Write a recursive function to count the occurences of a target element in an 
// array . Log the result for a few test cases . 

function countOccurance(arr,target){
    if(arr.length === 0){
        return 0;
    }
    let count = arr[0] === target ? 1 : 0 ;
    return count + countOccurance(arr.slice(1),target)
}

console.log(countOccurance([1,2,1,4,2,4,3,5,6,2,1,1],1),"times");
