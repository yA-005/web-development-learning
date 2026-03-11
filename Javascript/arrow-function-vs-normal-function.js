

let obj = [{
    firstName: "person-one",
    marks: 75
}, {
    firstName: "person-two", 
    marks: 45
}, {
    firstName: "person-three",
    marks: 77
}];

// Arrow function version
const updatedMarks1 = obj.map(a => {
    if (a.marks < 60) {
        a.marks += 20;
    }
    return a;
});

// Regular function version (same as yours)
const updatedMarks2 = obj.map(function(a) {
    if (a.marks < 60) {
        a.marks += 20;
    }
    return a;
});

console.log("Updated marks:", updatedMarks2);

// Key differences:

//     Arrow function: a => { ... }

//     Regular function: function(a) { ... }

// The logic inside the function body remains exactly the same!