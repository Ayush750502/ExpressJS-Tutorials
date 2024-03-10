const express = require('express');
const api = express();
// const bodyParser = require('body-parser');
api.use(express.json());

api.get('/2' , (req , res)=>{
    const response = {
        'message' : 'Hello world!'
    };
    res.send(response);
});

module.exports = api;