const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    }
})

const Taskdb = mongoose.model('taskdb', schema);
module.exports = Taskdb;
