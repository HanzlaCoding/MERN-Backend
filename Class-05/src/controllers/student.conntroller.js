const StudentModel = require("../model/student.model");

const createStudentRecord = async (req, res) => {
    const { name, age, major, gpa, email, status } = req.body;

    if (!name && !age && !major && !gpa && !email) {
        return console.log(`Plesae provide all the fields!`);
    }

    const newRecord = await StudentModel.create({
        name,
        age,
        major,
        gpa,
        email,
        status
    })

    return res.status(201).json({
        success: true,
        message: 'Student record created successfully!',
        data: newRecord
    })
}

const getRecords = async (req, res) => {
    const records = await StudentModel.find();

    return res.status(200).json({
        success: true,
        message: 'Student records retrieved successfully!',
        data: records
    })
}

const updateRecord = async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    const updatedRecord = await StudentModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    )

    return res.status(200).json({
        success: true,
        message: 'Student record updated successfully!',
        data: updatedRecord
    })
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;

    await StudentModel.findOneAndDelete({ _id: id })

    return res.status(200).json({
        success: true,
        message: 'Student record deleted successfully!',
    })
}


module.exports = {
    createStudentRecord,
    getRecords,
    updateRecord, deleteStudent
}