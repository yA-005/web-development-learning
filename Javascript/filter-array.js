

// filter method is used to filter the contents of array based on some conditions 

// it will not modify original array 

const arr = [1, 2, 3, 4, 5, 6];

// function to check if array elements are even or odd

function passArray (num) {

    return num %2== 0
}

const filterArray = arr.filter(passArray);

console.log(filterArray); // see the output 

// filtering out the numbers that are greater than 5 

function grtFive (arg1) {

        let ans = [];
            for(let i=0; i<arg1.length; i++){

                // console.log(arg1);
                if(arg1[i] >= 5){

                    ans.push(arg1[i]);
                
                // console.log(arg1[i]);
                
                //  ans = arg1[i];
            }

        }

        return ans;
        
        // return arg1 > 5;
}

let getnumber = grtFive(arr);
console.log(getnumber);

// arrow function with filter

let var1 = arr.filter(num => num >= 5)
console.log(var1);


function checkTwo (arg2) {

    let org = [];
    for(let val of arg2) {

        if(val >= 5) {

            org.push(val);

        }

    }
        return org;
}

let callOne = checkTwo(arr);
console.log(callOne);

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

}];

// create a function to check if the marks of a person is greatet then 50 or not!!

function checkMarks (arg3) {

        let cor = [];
        for(let i = 0; i < arg3.length; i++){

            if(arg3[i].marks >= 50){

                cor.push(arg3[i]);

                console.log(`Yes, the marks are greater than 50 for position ${i}:`, arg3[i].firstName);
            }
        }
}

checkMarks(obj);

let checkFilter = obj.filter(a => a.marks >= 50);
console.log(`The person who marks are more than 50: ${checkFilter.firstName}`);