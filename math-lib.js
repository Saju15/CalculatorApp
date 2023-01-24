module.exports.add = (request, response) => {
    let value1 = parseFloat(request.body.value1);
    let value2 = parseFloat(request.body.value2);
    let result = value1+value2;
    console.log("2 - server-side: The result of the add operation is: "+result);
    response.send({result: result});
};

module.exports.subtract = (request, response) => {
    let value1 = parseFloat(request.body.value1);
    let value2 = parseFloat(request.body.value2);
    let result = value1 - value2;
    console.log("server-side: The result of the subtract operation is: "+result);
    response.send({result: result});
};

module.exports.multiply = (request, response) => {
    let value1 = parseFloat(request.body.value1);
    let value2 = parseFloat(request.body.value2);
    let result = value1 * value2;
    console.log("server-side: The result of the multiply operation is: "+result);
    response.send({result: result});
};

module.exports.divide = (request, response) => {
    let value1 = parseFloat(request.body.value1);
    let value2 = parseFloat(request.body.value2);
    let result = value1 / value2;
    console.log("server-side: The result of the divide operation is: "+result);
    response.send({result: result});
};

module.exports.isEven = (request, response) => {
    let value1 = parseFloat(request.body.value1);
    let result = false;
    if (value1 % 2 == 0) result = true;
    console.log("server-side: The result of the isEven operation is: "+result);
    response.send({result: result});
};