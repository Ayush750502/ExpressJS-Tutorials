const express = require('express');
const bodyParser = require('body-parser');

const api_router = express();

api_router.get('/api01' , (req , res) =>{
    res.json({msg :"Hello world!"});
});


api_router.listen(3000, ()=>{
    console.log("Server is running!");
    console.log("For api link - http://localhost:3000/api01");
});