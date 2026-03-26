

// setTimeout 

function demonstrateAsync () {

    console.log("start");

    setTimeout(function (){

        console.log("Middle");
    }, 200);

    console.log("End");
}

demonstrateAsync(); 