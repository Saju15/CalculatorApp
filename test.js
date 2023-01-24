const request = require('request');
var url = 'http://localhost:3000';

// Calculating a sum sending values to a server
// Preparing an object to be sent
let obj = {
            value1: 5, 
            value2:3
        };
console.log("1 - Request for adding values passed as an object.");
request.get({
    headers: {'content-type': 'application/json'},
    url:     url+'/add',
    body:    JSON.stringify(obj)
}, function(error, response, body){
    console.log("3 - client-side receives from add operation: "+body);    
});

request.get({
    headers: {'content-type': 'application/json'},
    url:     url+'/subtract',
    body:    JSON.stringify(obj)
}, function(error, response, body){
    console.log("client-side receives from subtract operation: "+body);    
});