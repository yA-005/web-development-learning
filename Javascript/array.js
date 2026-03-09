

const newRack = ["Apple", "Orange", "Banana", "Cherry"];

// i want to access last element of an array 

console.log(newRack.length);
console.log(newRack[newRack.length - 1]);
console.log(newRack[-1]);

// operators in array 

//toString()

console.log(newRack.toString());

//join()

//same as toString() but accepts operators as arguments
console.log(newRack.join("-"));

// task 

function manageNumbers (numbers){

    a = numbers;
    //use-case of toString()

    const saveOne = a.toString()
    console.log(saveOne); 

    //use-case of join()

    const saveTwo = a.join("-");
    console.log(saveTwo);
}

const numbers = [1, 2, 3, 4, 5];
manageNumbers(numbers);

//shift() -- means delete from begining 

let storeOne = newRack.shift();
console.log(storeOne);

//unshift() -- means add an element at the begining 

newRack.unshift("Orange");
console.log(newRack);

// task 

function manageTasks (tasks){

     let a = tasks;

    //  first-task 
        a.push();

        //second-task
        a.pop()

        // shift 
        a.shift();

        // unshift
        a.unshift(newPri);

        //display 

}

 

const arryOne = [1, 2, 3, 4];

//delete method 

delete arryOne[2]; // bizarre to use 
console.log(arryOne);

//splice()
// it is use to remove elements from a specified index position 

const arryTwo = [1, 2, 3, 4];
arryTwo.splice(1, 2); //starting from index position 1 remove 2 elements
console.log(arryTwo);

//slice()

const arryThree = ["a", "b", "c", "d", "e", "f", "g"];
const storing = arryThree.slice(2, 4);
console.log(arryThree);
console.log(storing);

// concatination 

let arry1 = [1, 2, 3];

let arry2 = [4, 5, 6];

let conArry = arry1.concat(arry2);

console.log(conArry);

// flattened 

const arry3 = [[1, 2], [3, 4], [5, 6]];

console.log(arry3.flat()); // flat method

// element seraching via indexOf 

const arry4 = ["A", "B", "C"];
console.log(arry4.indexOf("B")); // indexOf method

// lastIndexOf 

const arry5 = ["a","b","c","a"];

console.log(arry5.lastIndexOf("a")); // last index of method 

// includes 

console.log(arry5.includes("a")); 

