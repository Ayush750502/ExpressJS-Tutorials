const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.set('view engine' , 'ejs');
app.get("/" , logger, logger, logger , (req , res  /* , next*/) => {
    console.log("App has Started!");
    const apiResponce = fetch('http://localhost:3000/api01');
    // res.send("Hi");// genrally used for testing our code.
    // res.sendStatus(500);// for sending errors
    // res.json({message: "Error"}); // for setting api
    //res.download("README.md");// for sending a file
    res.render("index" , {text0: apiResponce.msg});// 
    console.log("App has ended!");
});

// const loginRouter = require('./routes/signUp');
// app.use('/login' , loginRouter)
const userRouter = require('./routes/users');// adding user library
app.use('/users' , userRouter);// adding route to the server
const publicRouter = require('./routes/public');// adding user library
app.use('/public' , publicRouter);// adding route to the server

function logger(req , res , next){
    console.log(`At page: ${req.originalUrl}`);// gives url after port number
    next();
}

app.listen(3000);
console.log("Sever is running at 'http://localhost:3000'");