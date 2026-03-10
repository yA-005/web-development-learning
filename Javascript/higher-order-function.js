

// it is nothing just a function inside of a function 

function addFiveToAll (array) {

    // storing the array in a variable 

    let store = array; 
 
    for(let a in store) {
        
        // get the value from index's of the array 
        let value = store[a];

        // console.log(value + 5);
        console.log(value += 5);
    } 
}

// addFiveToAll([1, 2, 3]);

function takeArray(arg1) {

    console.log(arg1);
}

takeArray(
    addFiveToAll([1, 2, 3])
);

let obj = [{

        firstName: "person-one",
        lastName: "unknown-one",
        age: 1
        
}, {

        firstName: "person-two",
        lastName: "unknown-two",
        age: 2

}];

