const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientId:  {
        type: Number,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        trim: true,
      },
      address: {
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      medicalHistory: {
        allergies: [String],
        medications: [String],
        conditions: [String],
      },
      emergencyContact: {
        emergencyContactName: {
            type: String,
            required: true,
        },
        emergencyContactRelationship: {
            type: String,
            required: true,
        },
        emergencyContactContactNumber: {
            type: String,
            required: true,
        },
      },
      insurance: {
        provider: String,
        policyNumber: String,
        groupNumber: String,
        validUntil: Date,
      },
      doctorConsulting : {
        doctorConsultingId: {
            type: Number,
            required: true
        },
        doctorName: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true,
        },
      },
      bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Rare Type'],
        required: true,
      },
      height: {
        type: Number,
        required: true,
      }, 
      appointments: [{
        date: {
            type: Date,
            required: true,
        },
        doctor: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
      }],
})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;