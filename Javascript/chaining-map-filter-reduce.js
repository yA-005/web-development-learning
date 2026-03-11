

let obj = [{

        firstName: "person-one",
        lastName: "unknown-one",
        age: 1,
        marks: 75
        
}, {

        firstName: "person-two",
        lastName: "unknown-two",
        age: 2,
        marks: 70

},

{

        firstName: "person-three",
        lastName: "unknown-three",
        age: 3,
        marks: 77
}];

// marks < 60 -- add 20 to marks 
// marks > 60 -- add their total marks 

// marks < 60 -- add 20 to marks 

// function marksLess (args1) {

//     let ansOne = [];

//         for(let i = 0; i < args1.length; i++){

//             if(args1.marks < 80){

//                 ansOne.push(args1.marks += 20);
//             }
//         }

//     return ansOne; 
// }

// using map function 

const updatedMarks = obj.map(a => {

    if (a.marks < 60){

        a.marks += 20;
    }
    return a;
});

console.log(updatedMarks);

// now i want those students whose marks are > 60

let filteredStudnets = updatedMarks.filter(b => b.marks > 60);
console.log(filteredStudnets);

// sum of all the marks 

const totalMarks = filteredStudnets.reduce(function(acc, curr){

    acc = acc + curr.marks;
}, 0)

console.log(totalMarks);