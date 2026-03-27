

// a. Parent function been called in child function is callback function 
// b. To make child function wait till the exceution of parent takes place is main "feature of callback function"
// c. The main point to note is we pass a function to a function in callback 


// define a parent function 
    function parent (para1, callback){
        let parentVar = para1;
        console.log(parentVar);
        callback(parentVar);
        // return parentVar;

    }

// define a child function 
    function child (para2) {
        // let childVar = para2;
        // console.log(childVar);
        // return childVar;
        let store = `The name of the person is: ${para2}`;
        console.log(store);
    }

// parent(child("John"));
// child(parent("Peter"));
// now we will call parent function and pass our arguments and call child function in it 
parent("Harry", child);
