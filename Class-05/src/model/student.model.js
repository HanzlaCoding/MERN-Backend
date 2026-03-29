const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name.']
    },
    age: {
        type: Number,
        required: [true, 'Please provide the age.']
    },
    major: {
        type: String,
        required: [true, 'Please provide the major!']
    },
    gpa: {
        type: Number,
        min: [0, 'GPA cannot be less than 0'],
        max: [4, 'GPA cannot be more than 4']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
        unique: true, // Prevents duplicate emails in the database
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'graduated', 'on-leave', 'inactive'],
            message: '{VALUE} is not a supported status'
        },
        default: 'active'
    }
}, { timestamps: true });


const StudentModel = mongoose.model('Student', studentSchema);

module.exports = StudentModel;