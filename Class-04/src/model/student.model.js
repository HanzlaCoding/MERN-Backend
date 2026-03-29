const mongoose = require("mongoose");

// name,class, subject, gender
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student Name is required!']
    },
    class: {
        type: Number,
        required: [true, 'Class is required!']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required!']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required!']
    }
})

const studentModel = mongoose.model('student', studentSchema)

module.exports = studentModel;