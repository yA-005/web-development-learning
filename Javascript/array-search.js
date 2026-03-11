

let ages = [11, 12, 20, 21, 30, 31];


// find 

let findMatch = ages.find(function (a){

    return    a % 2 == 0;
})

console.log(findMatch);

// findLast 

let findLastMatch = ages.findLast(function (a){

    return    a % 2 == 0;
})

console.log(findLastMatch);

// findIndex 

let findIndex = ages.findIndex(function (a){

    return    a % 2 == 0;
})

console.log(findIndex);

// findLastIndex 

let findLastIndex = ages.findLastIndex(function (a){

    return    a % 2 == 0;
})

console.log(findLastIndex);