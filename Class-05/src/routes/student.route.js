const express = require('express');
const router = express.Router();
const { createStudentRecord, getRecords, updateRecord, deleteStudent } = require('../controllers/student.conntroller');
const { reqMiddleware } = require('../middlewares/req.middleware');

// POST /create-record
router.post('/create-record', reqMiddleware, createStudentRecord)
router.get('/get-record', reqMiddleware, getRecords)
router.put('/update-record/:id', reqMiddleware, updateRecord)
router.delete('/delete-record/:id', deleteStudent)


module.exports = router;