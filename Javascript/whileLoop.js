

let input = prompt("Enter something")

while(true){

   input = prompt(input)

   if(input.toLocaleLowerCase() === "Cancel the loop"){
        break;
   }
}