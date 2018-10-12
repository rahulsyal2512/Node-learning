const mongoose = require('mongoose');

const postSchema = {
    firstName: {
        type: String,
        },
    lastName: {
        type: String,
       
    },
    email: {
        type: String,
    },
    password: {
        type: String,       
    }
};


module.exports = mongoose.model('signup', postSchema);