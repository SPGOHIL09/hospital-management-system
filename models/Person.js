const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
