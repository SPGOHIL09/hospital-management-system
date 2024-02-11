const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    appointmentId: {
        type: Number,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    patientContactNumber: {
        type: String,
        required: true,
    },
    patientEmail: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled',
    },
    doctorId: {
        type: Number,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
