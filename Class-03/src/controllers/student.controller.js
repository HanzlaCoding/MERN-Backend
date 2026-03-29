const students = [
    { id: 1, name: "Hello", grade: 2 }
]

const createStudent = (req, res) => {
    const { name, grade } = req.body;

    const newRecord = students.push({ name, grade, id: Math.floor(Math.random() * 10 + 100) })

    return res.status(201).json({
        message: "Student created successfully!!",
        students
    })
}

const getAllStudents = (req,res) => {
    return res.status(200).json({
        message:'All records fetched successfully!!',
        students
    })
}

module.exports = { createStudent, getAllStudents }