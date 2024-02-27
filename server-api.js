const express = require('express');
const api_server = express();
const html = `<h1>Welcome to personal api server</h1>
<h3>for apis :- <a href='http://localhost:3010/api'>Click here</a><h3> `;
api_server.get('/' , (req , res) =>{
    console.log('running api server');
    res.send(html);
});


const api_01 = require('./api/api');
api_server.use('/api',api_01);
const port = 3010;
api_server.listen(port , ()=>{
    console.log('running server at http://localhost:3010');
    console.log('for apis :- http://localhost:3010/api');
});