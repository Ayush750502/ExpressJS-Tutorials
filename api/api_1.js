const express = require('express');
const api = express();
api.get('/' , (req , res) =>{
    res.json({msg :"Hello world!"});
});


module.exports = api;