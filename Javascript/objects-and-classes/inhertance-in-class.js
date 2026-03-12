



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

// inheritance class

// inherit features from parent class
// add it's own feature 

// make a new class 

class NewTwo extends New {

    // constructor of class NewTwo 
            constructor (name, emailId, newValue) {

        // to make use of parent's data we have to use 
        // super keyword in construtor 

            super (name, emailId);

        // passing newValue to it's place
            this.newValue = newValue;

    }

        // make a function that we concat all the values 
        // from parent class and child class 

            allSum () {

                console.log(`Name: ${this.name}, email-id: ${this.emailId}, new-value: ${this.newValue}`);
        }

        // a function which passes a value to newValue 
            passValue (store) {

                this.newValue = store;
                // when this function is called it will change the value of  
                // newValue variable
                    console.log(`The value of newValue variable is: ${this.newValue}`);
            }
}

// make an instance of child class
    let childOne = new NewTwo("person-two", "person-two@gmail.com", 21);
    childOne.allSum();

// making an another object of child class 
    let childTwo = new NewTwo("person-three", "person-three@gamil.com", 25);
    childTwo.allSum();
    childTwo.passValue(24);