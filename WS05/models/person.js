const mongoose = require('mongoose')

const personSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    dob: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model('Person', personSchema)