

//what is map in function?
// map is a way to use a function over an array 

let arry1 = [1.1, 1.2, 1.3];

function chanagesToArray (a) {

        return a * 2
}

const newArray = arry1.map(chanagesToArray); // function over an array or function passed to an array 
console.log(newArray);

// Question 

const names = ['Alice', 'Bob', 'Charlie', 'David'];

for (let i of names){

    // to print the length of each element in the array 
    console.log(i.length);
}



let obj = [{

        firstName: "person-one",
        lastName: "unknown-one",
        age: 1
        
}, {

        firstName: "person-two",
        lastName: "unknown-two",
        age: 2

}];

// make a function to extract the firstname value from an array 

function getFirstName (obj, index) {
        
        console.log(obj[index].firstName);
        // return arg[0].firstName; 

}

getFirstName(obj, 1);