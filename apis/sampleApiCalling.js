const express = require('express');
const route = express();
const axios = require('axios');


async function fetchingData1(){
    const data = await fetch('http://localhost:3025' , {
        method : 'GET',
        body : JSON.stringify()
    });
    return await data.json();    
}

async function fetchingData2(){
    const data = await axios.get('http://localhost:3025')
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