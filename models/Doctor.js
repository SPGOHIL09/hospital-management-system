const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorId: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    designation : {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    dob: {
        type: Date,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    specializations: {
        type: [String],
        required: true,
    },
    consultationFee: {
        type: Number,
        required: true,
    },
    timings: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        min: 0,
    },
    totalAppointments: {
        type: Number,
        required: true,
        min: 0,
    },
    qualifications: {
        type: [
        {
            degree: { type: String, required: true },
            institution: { type: String, required: true },
            year: { type: Number, required: true },
        },
        ],
    },
    department: {
        type: String,
        required: true,
    },
    staffs : {
        type :[
            {
                staffId : {type : Number, required : true},
                staffName : {type : String, required : true },
                staffDesignation : {type : String,required : true}
            }
        ]
    }
});

const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;
