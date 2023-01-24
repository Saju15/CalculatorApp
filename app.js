const express = require('express');
const math_lib = require('./math-lib');// Here we import our code with the math operations
const app = express();
const port = 3000;

app.use(express.json());// support json encoded bodies
app.use(express.urlencoded({extended: true}));//incoming objects are strings or arrays

// API resource paths
app.get('/add', math_lib.add);
app.get('/subtract', math_lib.subtract);
app.get('/multiply', math_lib.multiply);
app.get('/divide', math_lib.divide);
app.get('/iseven', math_lib.isEven);

app.listen(port, () => {
    console.log('App listening at http://localhost:%d', port);
});