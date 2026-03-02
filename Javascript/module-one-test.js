

for(i = 0; i <= 3; i++){

    let j = 1;

    while(j <= 2){

        console.log(i + ", " + j);

        j++;
    }
}

let ax = "8" - 2 + "3";

console.log(ax);

// two similar objects are always false 

let objOne = {

    name: "Harry",
    place: "Marry"
}

let objTwo = {

    name: "Harry",
    place: "Marry"
}

console.log(objOne == objTwo);
console.log(objOne === objTwo);

// String functions 

let strOne  = "Hello World";

console.log(strOne.charAt(3));
console.log(strOne.at(4));
console.log(strOne.slice(2, 6));
console.log(strOne.substring(2, 6));

// string and substring are same 

console.log(strOne.toUpperCase());
console.log(strOne.toLowerCase());


console.log(strOne.split(""));
console.log(strOne.split("").reverse());
console.log(strOne.split("").reverse().join(""));

// isPalindrome


function isPalindrome(str) {
    
     // Reverse the string
  const reversed = str.split('').reverse().join('');
  // Compare with original
  return str === reversed;
}


let str = "Hello World";

console.log(str.substring(0, 5));
console.log(str.slice(6, -3));

let bx = 10;
console.log(bx);

{
    let bx = 11;
    console.log(bx);
}

cx = bx;
console.log(cx);

// var is global scope 
// let are local scope 
// const cannot be kept blank 