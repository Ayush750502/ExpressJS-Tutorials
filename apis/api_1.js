const express = require('express');
const api = express();
// const bodyParser = require('body-parser');
api.use(express.json());
api.get('/response' , (req , res)=>{
    const response = {
        'name' : 'Ayush',
        'email' : 'ayush@mail.com',
        'pass' : "hsuya"
    };
    res.send(response);
});


module.exports = api;