const mongoose = require('mongoose');

const Course = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content:{
        type: String,
        // required: true
    },
    videos:{
        type: Number,
        required: true
    },
    active: Boolean
})

module.exports = mongoose.model('Courses', Course);