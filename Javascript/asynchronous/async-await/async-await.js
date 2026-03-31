
// {
//     scenario: demo of async and await & try and catcg
//     
//     whatHasBeenUSed: async, await in place of then and catch 
// }


var url = "https://dummyjson.com/products/1";

var getData = async function(){
    
    try{
        var responseOne = await fetch(url);
        var responseTwo = await responseOne.json();
        console.log(responseTwo);
    }catch(error){
        console.log(error);
    }


}

getData();