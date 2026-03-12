


let obj = {

        name: "Thomas",
        age: 20,
        emailID: "thomas@gmail.com",

        // make a method inside this object 
            method: function (){
                console.log(`Log object details: ${this.name} & ${this.age}`);
            }
}

// normal access to method 

obj.method();

let objTwo = {

        name: "new-person",
        age: 25,
        emailID: "new-person@gmail.com",

        // make a method inside this object 
            // method: function (){
            //     console.log(`Log object details: ${this.name} & ${this.age}`);
            // }
}

// how to use method function 
// inside objTwo object 

// first parent obj
// second current obj 
// call function in which child obj is passed 

obj.method.call(objTwo);

// will make a new function 
// this function will be share among objects 

let fun = function (para, para2) {

        // the objects blueprint remain the same 
        // objects should have name and age fileld embedded in them 

            console.log(`Log object details: ${this.name} & ${this.age}`)

        // passing value to function without using this keyword 

            console.log(`Logging value when passed from function calling: ${para}`);

        // lets say our function accepts another parameter 
        //  we will pass the value in this by using apply method 
            console.log(`The second parameter is: ${para2}`);
}

// calling object "obj"
// we can also pass agruments to the function 
// as they are passed when the function is called 
// they are used without this keyword 

    fun.call(obj, 120);  
// calling object "objTwo"
    fun.call(objTwo, 121);
// using apply instead of call 
    fun.apply(obj, ["hello", "good"]);

//bind function 
// bind will return our function 
// that can be called latter upon 
    const funOutput = fun.bind(obj, "Go", "Now");
    funOutput();