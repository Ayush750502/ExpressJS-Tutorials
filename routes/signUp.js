const express = require("express");
const router = express.Router();

// Import the functions you need from the SDKs you need
var firebaseapp = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyA54-Fvt8iNS8ZR78cRJmWxwwkp3GKDCTs",
  authDomain: "testcase-750502-01.firebaseapp.com",
  databaseURL: "https://testcase-750502-01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testcase-750502-01",
  storageBucket: "testcase-750502-01.appspot.com",
  messagingSenderId: "924771052249",
  appId: "1:924771052249:web:9cd48c4c274b6f3f602cc8",
  measurementId: "G-8C6FXTTTF0"
};


firebaseapp.initializeApp(firebaseConfig);

const contactFormDb = firebaseapp.database().ref('contactForm');


router.get('./',(req , res)=>{
    res.render();
});

router.get("./new" , (req , res) =>{
    let name = req.query.name;
    let password = req.query.pass;
    saveData(name , password);
    res.render("user.html" , {username : name,
    pass : password});
});

const saveData = (name , password) => {
    let data = contactFormDb.push();
    data.set({
        name : name,
        pass : password
    });
}

module.exports = router;