

// function expression

var a = function (){


}

// named unction expression 

var a = function abc() {

    console.log("abc is a function");
}

// now call the function 

a();
abc(); // will get an error

// changes 

// anonymous function 

const printMessage1 = function (message){

    console.log(`Anonymous function says: ${message}`);
}

// named function 

const printMessage2 = function printMessage2 (message){

    console.log(`Named function says: ${message}`);
}