
function createGreeter (greeting) {

    function greet (name){

        console.log(`${greeting}, ${name}`);
    }

    return greet; // we can return a function inside a function 
}

const greetMorning = createGreeter("Good morning"); 
greetMorning("Bob!")