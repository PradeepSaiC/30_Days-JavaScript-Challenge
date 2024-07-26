// Activity 1 : Class Definition 
// Task 1 : Define a class Person with properties name and age , and a method to 
// return a greeting message.Create an instance of the class and log the greeting message.
class Person{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `Hello I'm ${this.name} and ${this.age} years old.`;
    }
    updateAge(newAge){
        this.age=newAge;
        console.log(`${this.name} age is updated to ${this.age}`);
    }
    static genericGreetMsg(){
        return `Hey there Welcome`;
    }
}
const personObj=new Person("Sai Pradeep",20);
console.log(personObj.greet());

// Task 2 : Add a method to the Person class that updates the age property 
// and logs the updated age. 
personObj.updateAge(19);

// Activity 2 : Class Inheritance 
// Task 3 : Define a class Student that extends the Person class. Add a property studuntId and a 
// method to return the student ID . Create an instance of the Student class and log the student ID. 
class Student extends Person {
    static studentCount = 0;
    constructor(name,age,studentID){
        super(name,age);
        this.studentID=studentID;
        Student.studentCount++;
        console.log("Total Number of Students : ",Student.studentCount);
    }
    getStudentID(){
        return `Student ID: ${this.studentID}`;
    }
    greet(){
        return `Hello I'm ${this.name} , ${this.age} years old , with student ID : ${this.studentID}`;
    }
}

const studentObj=new Student("SAi Pradeep",20,20);
console.log(studentObj.getStudentID());

// Task 4 : Override the greeting method in the Student class to include the student ID in the message . Log 
// the overridden greeting message. 
console.log(studentObj.greet());

// Activity 3 : Static Methods and Properties 
// Task 5 : Add a static method to the Person class that returns a generic greeting message . 
// Call this static method without creating an instance of the class and log the message . 
console.log(Person.genericGreetMsg());
// Task 6 : Add a static property to the Student class to keep track of the number of students
// created . Increment this property in the constructor and log the total number of students . 
const studentOne=new Student("Anil Kumar",19,12);
const studentTwo=new Student("Arun Kumar",20,14);
const studentThree=new Student("Akshay Kumar",18,4);
// Activity 4 : Getters and Setters 
// Task 7 : Add a getter method to the Person class to return the full name (assume a firstName and lastName property). 
// Create an instance and log the full name using the getter . 
class Person1{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set updateName(name){
        const [fName,lName] = name.split(" ");
        this.firstName=fName;
        this.lastName=lName; 
    }
}
const personOne=new Person1("SAi","Pradeep");
console.log(personOne.fullName);

// Task 8 : Add a setter method to the Person class to update the name properties (firstName and lastName). 
// Update the name using the setter and log the updated full name .

personOne.updateName="Anil Kumar";
console.log(personOne.fullName);