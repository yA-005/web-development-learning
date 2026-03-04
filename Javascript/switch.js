let dayNumber = new Date().getDay();

// console.log(dayNumber);

// switch statements 

let day; 

switch(dayNumber) {

    // let day; 

    case 0: 
        day = "Sunday";
    case 1: 
        day = "Monday";
    case 2: 
        day = "Tuesday";
    case 3: 
        day = "Wednesday";
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
    case 6: 
        day = "Saturday";
    default: 
        // default should display a default message if the code fails 
        day = "Please provide correct day";

}

console.log(day);


// let user = {

//         harry: 56,
//         akash: 67,
//         suraj: 78
// };

// for(a in user){

//         // a is the key 
//     //    user[a] is the value 

//       console.log(`${a} and his value is ${user[a]}`); 

// }