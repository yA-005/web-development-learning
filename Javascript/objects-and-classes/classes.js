

// declare a class 

class New {  // a class does not accept parameters or arguments 

    constructor (name, emailId) {

            // Constructor initializes object properties when creating a new instance

            // this keyword refers to the current instance of the class
            // constructor is the method that invokes the class 
            // main recipe for the class to make objects
            // transfering of arguemnts to the above parameters
            this.name = name;
            this.emailId = emailId;
    }

    // declaring a function that will print the details as there are passed by objects of
    // the class 

    printIt() {

        console.log(`Name is: ${this.name} and email is: ${this.emailId}`);
    }
}

// make objects so that properties of the class can be used 

let objOne = new New("John", "john@gmail.com");  // object-one
let objTwo = new New("Person", "person@gmail.com");  // object-two

objOne.printIt();
objTwo.printIt();


const call = {

    caller: "mom", 
    says: function() {

            console.log(`Hey, ${this.caller}`);
    }
};

call.says();