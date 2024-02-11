const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminId: {
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
  email: {
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
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
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
  totalAppointments: {
    type: Number,
    required: true,
    min: 0,
  },
  doctors: {
    type: [
      {
        doctorId: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
