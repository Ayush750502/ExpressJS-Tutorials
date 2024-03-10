const express = require('express');
const server_api = express();

server_api.get('/' , (req , res) => {
    console.log('Server is loaded!');
});

const api_1 = require('./api_1');
server_api.use('/api1' , api_1);
const api_2 = require("./api_2");
server_api.use('/api2',api_2);
const api_3 = require('./api_3');
server_api.use('/api3' , api_3);


server_api.listen(3015 , () =>{
    console.log("The server is running at :- \n\t\thttp://localhost:3015");
});