const express = require('express');
const bodyParser = require('body-parser');
const Signup = require('../model/signup');
const mongoose = require('mongoose');
const app = express();
var bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/testing');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    next();
});


app.post(('/v1/login'), (req, res) => {
    Signup.find({ email: req.body.email })
        .then((user) => {
            user.forEach((elem) => {
                console.log(req.body.password);
                const match = bcrypt.compare(req.body.password, elem.password)
                    .then(function (response) {
                        if (response) {
                            res.status(200).json({
                                msg: 1
                            })
                        }
                        else
                        {
                            res.status(200).json({
                                msg: -1
                            })
                        }
                    })
            })

        })
        .catch((err) => {
            res.status(422).json({
                msg: -2,
                error: err
            });
        });
})
// app.post(('/v1/login'), (req, res) => {
//     Signup.find({ email: req.body.email, password: req.body.password })
//     bcrypt.compare(hash, password).then(function(res) {
//       console.log("Logged in");
//     })
//         .then((user) => {
//             console.log(user);
//             if (user.length < 1 ) {
//                 res.status(200).json({
//                     msg: -1
//                 })
//             }
//             else {
//                 console.log("Login successfull");
//                 res.status(200).json({
//                     msg: 1
//                 })
//             }
//         })
//         .catch((err) => {
//             res.status(422).json({
//                 msg: -2,
//                 error: err
//             });
//         });
// })
// console.log(new_users);
//     var log = new login({
//         email: req.body.email,
//         password: req.body.password
//     });
//     console.log(log);
//     login.find(function (err, posts) {
//         console.log(err)
//     });
//     res.status(200).json({
//         res :"1"
//     });
// });

module.exports = app;