const express = require('express');
const api = express();

api.get('/' , (req , res)=>{
    res.json([
        {
            name : 'Ayush',
            email : 'ayush@mail.com',
            pass : "hsuya"
        }
    ]);
});

module.exports = api;