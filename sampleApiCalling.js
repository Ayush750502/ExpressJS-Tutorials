const express = require('express');
const route = express();
const url2 = 'http://localhost:3015/api2/2';
const url1 = 'http://localhost:3015/api1/response';
const url3 = 'http://localhost:3015/api3/?value=';
let data1 = [];
const val = {
    "value" : 'message'
}
async function fetchingData1(url){
    const options = {
        'method' : 'GET',
        headers : {
            'Content-type' : 'application/json'
        }
    };
    
    await fetch(url ,options)
    .then(res => {
        res = res.json();
        return res;
    })
    .then(data => {
        console.log("fetching data :- \n",data);
        data1.push(data);
    });
}
async function postingData1(url){
    
    const options = {
        'method' : 'POST',
        headers : {
            'Content-type' : 'application/json',
        },
        body : JSON.stringify(val)
    };
    await fetch(url ,options)
    .then(res => {
        res = res.json();
        return res;
    })
    .then(data => {
        console.log("fetching data :- \n",data);
        data1.push(data);
    });
}
route.get('/', (req ,res)=>{
    res.json(data1);
});
route.get('/1', (req ,res)=>{
    fetchingData1(url1);
});
route.get('/2', (req ,res)=>{
    fetchingData1(url2);
});
// route.get('/3', (req ,res)=>{
//     postingData1(url3);
//     fetchingData1(url3);
// });

route.listen(3025 , () => {
    console.log("Server link :- http://localhost:3025");
});