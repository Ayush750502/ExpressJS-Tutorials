const express = require('express');
const api = express();
const bodyParser = require('body-parser');

api.get('/' , (req , res)=>{
    res.json({
        'name' : 'Ayush',
        'email' : 'ayush@mail.com',
        'pass' : "hsuya"
    });
});

api.use(bodyParser.json());
api.listen(3010);