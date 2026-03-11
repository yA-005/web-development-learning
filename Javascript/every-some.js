

let ages = [11, 12, 20, 21, 30, 31];

let isAdult = ages.every(function (a){

    return a > 15;
})

console.log(isAdult);

// some method 

let isAdult2 = ages.some(function (b) {

    return    b > 15;
})

console.log(isAdult2);