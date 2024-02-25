const express = require("express");
const router = express.Router();
router.use(logger)
router.get("/" , (req , res)=>{
    console.log(req.query.name);// user?name=
    res.send('User List');
});

router.get("/new" , (req , res)=>{
    res.render("users/new" , {firstName: "Sample"});
});

router.post('/' , (req , res) => {
    let input = req.body.firstName;
    let check = true;
    users.forEach((user)=>{
        if(user.name == input){
            check = false;
        }
    });
    if(check){
        users.push({name: input});
        res.redirect(`/users/${users.length - 1}`);
    }
    else{
        console.log("The username is already registered!");
        res.render('users/new' , {firstName: input});// showing error 
    }
});

// router.get('/:id' , (req , res) => {
//     req.params.id;
//     res.send(`"User Get with ID: ${req.params.id}"`);
// });
// router.put('/:id' , (req , res) => {
//     req.params.id;
//     res.send(`"Update user with ID: ${req.params.id}"`);
// });
// router.delete('/:id' , (req , res) => {
//     req.params.id;
//     res.send(`"Deleteting User with ID: ${req.params.id}"`);
// });

//          or

router
.route("/:id")
.get((req , res) => {
    console.log(req.user);
    res.send(`"User Get with ID: ${req.params.id}"<br>"User name: ${req.user.name}"`);
})
.put((res , req) => {
    res.send(`"Update user with ID: ${req.params.id}"`);
})
.delete((req , res) => {
    res.send(`"Deleteting User with ID: ${req.params.id}"`);
    })
    ;


    let users = [{name: "kyler"} , {name: "Salye"}];
    router.param("id" , (req , res , next , id)=>{
        // next is essential in params;
        req.user = users[id]
        next();
    });
    
function logger(req , res , next){
    console.log(`At page: ${req.originalUrl}`);// gives url after port number
    next();
}


module.exports = router;