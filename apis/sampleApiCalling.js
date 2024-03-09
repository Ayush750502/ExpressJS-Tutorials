const express = require('express');
const route = express();
const axios = require('axios');
const url = 'http://localhost:3010';

async function fetchingData1(){
    const data = await fetch(url , {
        method : 'GET',
        body : JSON.stringify()
    });
    return await data.json();    
}

async function fetchingData2(){
    const data = await axios.get(url)
        .then(respones => {
            return respones.data;
        })
        .catch(err => {
            res.status(500).json({error : err});
            console.error(err);
        });
    return await data;    
}

route.get('/', (req ,res)=>{
    const data = fetchingData1();
    res.json(data['name']);
});

route.get('/#', (req ,res)=>{
    const data = fetchingData2();
    res.json(data['name']);
});

route.listen(3005);