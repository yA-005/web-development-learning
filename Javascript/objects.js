let product 

product = {

    name: "Biscuit",
    price: 20,
    inStock: true,
    applyDiscount: function(){

        let discount = this.price * 0.10;
        this.price = this.price - discount;
    }
}

// create a function 


// Write a Function: Create a function checkAvailability that takes the product object.

// The Logic:

// If inStock is true, log: "The [name] costs $[price]."

// If inStock is false, log: "Sorry, [name] is out of stock."

function checkAvailability(item){

    if (item.inStock === true){

        console.log(`The product name is ${item.name} and price of the product is ${item.price}`)
    }
    else{

        console.log(`Sorry!!! the product ${item.name} is out of stock`)
    }
}

// checkAvailability(product)

console.log(product.price);
console.log(product.applyDiscount());
console.log(product.price);