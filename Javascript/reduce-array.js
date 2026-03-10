
// reduce will reduce the array value to a single digit 

const arr = [1, 2, 3, 4, 5, 6];


let sum = arr.reduce(function(acc, curr){

        acc = acc + curr;
        return acc;
}, 0); // 0 is inital value of the acc acc = 0 ;

console.log(sum);

// questions 
// maxmium value in an array 
// minimum value in an array
// sum of all the elemnts in an array

let arry1 = [1.1, 1.2, 1.3];
let sum2 = 0;
    for (let i = 0; i < arry1.length; i++){

        
        sum2 += arry1[i];
        
    }

console.log(Math.floor(sum2));

// maxmium value in an array 
// let arry1 = [1.1, 1.2, 1.3];

let max = arry1[0];

    for(let i = 0; i < arry1.length; i++){

        if(arry1[i]>max){

            // reaplace max value 
            max = arry1[i];
        }
    }

console.log(`The maximum value from array is = ${max}`);

// minimum value in an array
// let arry1 = [1.1, 1.2, 1.3];

let min = arry1[0];

    for(let i = 1; i < arry1.length; i++){

        if(arry1[i]<min){

            // reaplace max value 
            min = arry1[i];
        }
    }

console.log(`The minimum value from array is = ${min}`);