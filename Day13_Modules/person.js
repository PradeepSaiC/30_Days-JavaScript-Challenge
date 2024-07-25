const Person = {
    firstName : "Sai",
    lastName : "Pradeep",
    age : 20,
    getStatus : function (){
        console.log(`Hi I'm ${this.firstName} ${this.lastName} currently studying in BE`);
    },
    getMobileNumber : function (){
        console.log("My mobile number is 45324455434");
    }
}

module.exports=Person;