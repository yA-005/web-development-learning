

let arry1 = [3, 2, 1]; 

let arry2 = [4, 5, 6];

//toSorted 

const sortArry = arry1.toSorted();
console.log(arry1);
console.log(sortArry);

// toReverse 

const dup1 = arry1.toReversed();
console.log(dup1);

//comapre funcion 

//ascending order sorting 

const arry5 = [34, 112, 56];
console.log(arry5);
arry5.sort(function (a, b) {return (a -b)}); //compare function 
console.log(arry5);

//descending order sorting 
const arry6 = [43, 212, 65];
console.log(arry6);
arry6.sort(function (a, b) {return (b - a)}); //compare function 
console.log(arry6);

//testing math floor and random methods 

const var1 = Math.floor(Math.random() * 100) + 1;
console.log(var1);