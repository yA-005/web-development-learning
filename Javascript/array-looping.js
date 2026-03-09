

let arry1 = [3, 2, 1]; 

let arry2 = [4, 5, 6];

// via for loop 

for(let i = 0; i < arry1.length; i++){

    console.log(arry1[i]);
}

//via for of loop 

for(let value of arry1){

    console.log(value); // so the arry1 values are transfered to value variable
}

// via for in loop 

for (let ext in arry1) {

    console.log(`The element is ${arry1[ext]} and it's index is ${ext}`)
}