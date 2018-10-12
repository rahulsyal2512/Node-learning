const express = require('express');
const bodyParser = require('body-parser');
const SignUp = require('../model/signup');
const mongoose = require('mongoose');
const app = express();
var bcrypt = require('bcrypt');
const saltRounds = 10; 
mongoose.connect('mongodb://localhost:27017/testing');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    next();
});

app.post(('/v1/signup'), (req, res) => {

    var check = req.body;
    var arr=[];
    var inputs = ["firstName","lastName","email","password"];
    inputs.forEach(function(v){
        if(check[v] === undefined || check[v]=== ""){
            arr.push(v+" cannot be empty")
        }
    });
  
if (arr.length !== 0) {
    res.status(201).json({
        err: arr
    });
}
else {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        var sign = new SignUp({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        });
console.log(sign);
        sign.save()
            .then((result) => {
                res.status(201).json({
                    msg: "Signup successfully",
                    newone: req.body.firstName
                });
            })
            .catch((err) => {
                res.status(422).json({
                    msg: "Error while saving user",
                    error: err
                });
            })
        })
    }
});
    // console.log(check);
    // var arr = [];
    // Object.keys(check).forEach((key) =>{
    //     // console.log(key);
    //     if (check[key]=== "") {
    //         arr.push(key + " cannot be empty");
    //     }
    // });
// })
// console.log(arr.length);  

// sign.save(function (err) {
                    //     if (err) return console.log("SignUp Successfull");
                    //     // saved!
                    //     else console.log("SignUp Not Successfull");
                    //   });
        // console.log(val)
    // check.forEach((val)=>{
    // })
    //    if(check.firstName === "" || check.lastName === "" || check.email=== '' || check.password===''
    //       || check.firstName === undefined || check.lastName === undefined || check.email=== undefined || check.password=== undefined  )
    //    {
    //        if(check.firstName==='' || check.firstName===undefined){
    //        res.status(404).json({
    //             err: "First Name should Not be empty"
    //        });}
    //        if(check.lastName==='' || check.lastName===undefined){
    //         res.status(404).json({
    //              err: "Last Name should Not be empty"
    //         });}
    //         if(check.email==='' || check.email===undefined){
    //             res.status(404).json({
    //                  err: "Email Name should Not be empty"
    //             });}
    //         if(check.password==='' || check.password===undefined){
    //                 res.status(404).json({
    //                      err: "password Name should Not be empty"
    //                 });}
    //     }
    //    console.log("here");


// }); 
// });

app.get(('/v1/signup'), (req, res) => {
            SignUp.find()
                .then((users) => {
                    console.log(users);
                    let new_users = [];
                    users.forEach(function (v, i) {
                        let user = {
                            id: v._id,
                            firstName: v.firstName,
                            lastName: v.lastName,
                            email: v.email,
                            password: v.password
                        };
                        new_users.push(user);
                    });
                    res.status(200).json({
                        users: new_users
                    });
                })
                .catch((err) => {
                    res.status(422).json({
                        msg: -1,
                        error: err
                    });
                });
            // SignUp.find(function (err, posts) {
            //     if (err) return handleError(err);
            //     // saved!
            //     else console.log(posts)
            //   });
            // res.status(200).json({
            //      username: req.body.firstName
            // });
        });

    module.exports = app;