const express = require('express');
const studentController = require('../controllers/student.controller.js')

const router = express.Router();

router.post('/student/create', studentController.createStudent)
router.get('/student/getStudents', studentController.getAllStudents)


module.exports = router;