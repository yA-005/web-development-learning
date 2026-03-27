

var url = "https://dummyjson.com/products/1";
var urlResult = fetch(url);

var seeData = null;

urlResult
    .then(function (result) {
        return result.json();   // return the promise
    })
    .then(function (data) {
        seeData = data;         // now data is the actual JSON object
        console.log(seeData);   // works here
    })
    .catch(function (error) {
        console.error(error);
    });

// Don't try to use seeData here – it's still null (async)