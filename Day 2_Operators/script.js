//Activity 1: Arithmetic operations 
let a=10;
let b=34;
let sum=a+b; 
let diff=b-a;
let produnct=a*b;
let divide=a/b;
let remainder=b%a;
console.log(sum);
console.log(diff);
console.log(produnct);
console.log(divide);
console.log(remainder);

//Activity 2: Assignmet Operators
// += 
let p=4;
p+=5;
console.log(p);

// -=
let q=5;
q-=3;
console.log(q);

//Activity 3: Comparision Operators
// >,< 
let k=5;
let l=8;
let res1=k<l;
let res2=k>l;
console.log(res1);
console.log(res2);

// >= , <=
let m=30;
let n=34;
let r1=n>=m;
let r2=m<=30;
console.log(r1);
console.log(r2);

// == , ===
let n1=20;
let n2="20";
console.log(n1 == n2);
console.log(n1 === n2);

//Activity 4: Logical Operators
let num1=12;
let num2=30;
// &&
let andResult=(num1<num2) && (num2>=num1);
console.log(andResult);
// ||
let orResult=(num1>num2) || (num1 === 12);
console.log(orResult);
// !
let notResult=!(num1>num2);
console.log(notResult);

// Activity 5: Ternary Operator 
let number1=39;
let number2=-49;
let result1=(number1 > 0) ? `${number1} is positive` : `${number1} is negative`;
let result2=(number2 > 0) ? `${number2} is positive` : `${number2} is negative`;
console.log(result1);
console.log(result2);

// Feature requests 
// Arithmetic operators 
let u=30;
let v=23;
console.log(u+v);
console.log(u-v);
console.log(u*v);
console.log(u/v);
console.log(u%v);

// comparision and logical operators 
let numberOne=34;
let numberTwo=72;
let ans=(numberOne < numberTwo) && (numberOne % 2 === 0);
console.log(ans);

// ternary operator
let numOne=23; 
let condRes=(numOne>0) ? "Positive number" : "negative number";
console.log(condRes);