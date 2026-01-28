// function define 

function store(){

    console.log("Hello, first function")
}

// call the function 

store()

// functions with parameters

function addNumbers(a, b){
      
    let val1 = a;
    let val2 = b;
    return val1 + val2;
}

let sum = addNumbers(10, 20)

console.log(sum)

// challenge 

let isReady = false;

function take(status){

    // valu3 = !isReady;

    return !status;
}

let output = take(isReady)

console.log(output)