

let obj = {

        name: "Thomas",
        age: 20,
        emailID: "thomas@gmail.com"
}

// accesing emailid from object 

console.log(obj.emailID);
console.log(obj["emailID"]);

// adding a function to obj 

obj.fun = function () {

    console.log("Added!!!");
}

console.log(obj);
console.log(obj.fun); // imp 
obj.fun(); // imp 
