// question 1 

let isLoggedOut = false;
if (!isLoggedOut) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// question 2 

let score = 0;
if (!score) {
    console.log("No score recorded");
} else {
    console.log("Score found");
}

// question 3 

// study later 


let userName = "";
let displayName = !userName ? "Guest" : userName;
console.log(displayName);

// question 4 

let isWeekend = true;
let isRaining = false;

if (!(isWeekend && isRaining)) {
    console.log("Go for a walk");
} else {
    console.log("Stay inside");
}

// question 5 

let data = [];
if (!data.length) {
    console.log("Array is empty");
} else {
    console.log("Array has items");
}

// question 6 

let isAdmin = false;
let hasToken = true;

if (!isAdmin && hasToken) {
    console.log("Standard User Access");
} else if (!isAdmin && !hasToken) {
    console.log("Please Login");
} else {
    console.log("Admin Access");
}

// question 7 

let val = "0"; 
let status = !!val ? "Valid" : "Invalid";
console.log(status);

// question 8 

let isProcessing = true;
let attempts = 3;

if (!!isProcessing && !(attempts < 1)) {
    console.log("Keep trying...");
} else {
    console.log("Stop.");
}

// question 9 

let databaseRecord = null;

if (!databaseRecord) {
  console.log("Record missing.");
} else {
  console.log("Record found.");
}

// question 10 

let value = "0"; // Note: This is a string containing the character zero

if (!value) {
  console.log("Falsy");
} else {
  console.log("Truthy");
}