const express = require('express');
const api = express();
api.use(express.json());
let value;
let input;
api.route('/').post((req , res) =>{
    input = req.querry.value;
    console.log('The value got is-\n\t',input);
    value = {
        value : input
    }
    res.send(value);
});


module.exports = api;