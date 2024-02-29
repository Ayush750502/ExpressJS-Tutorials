const express = require('express');

const api_router = express();
const links = [
    {link:'http://localhost:3010/api/api_1'},
    {link:'http://localhost:3010/api/api_2'},
    ];

let all_apis = ()=>{
    let out = '';
    let i = 1;
    links.forEach(link =>{
        out += `<a href='${link.link.toString()}'>api ${i} </a><br>`;
        i++;
    });
    return out;
}
api_router.get('/' , (req , res)=>{
    res.send(`the links :-${all_apis()}`);
});

const api_01 = require('./api_1');
api_router.use('/api_1' , api_01);

const api_02 = require('./api_2');
api_router.use('/api_2' , api_02);

module.exports = api_router;