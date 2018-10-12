const mongoose = require('mongoose');

const postSchema = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
};


module.exports = mongoose.model('login', postSchema);