

let parent = {

        name: "JS",
        type: "scripting-language",
        Isyes: true
}

let child = {

        a: 10,
        b: 11,
        c: 12
}

// how child object can access properties of parent object 

    // by pointing child object prototype to parent object 
        child.__proto__ = parent;

    // cheching if child can access the values of parent 
        console.log(child.name);