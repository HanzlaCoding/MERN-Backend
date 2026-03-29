const express = require('express');
const router = express.Router();
const { createStudentRecord, getRecords, updateRecord } = require('../controllers/student.conntroller');


// POST /create-record
router.post('/create-record', createStudentRecord)
router.get('/get-record', getRecords)
router.put('/update-record/:id', updateRecord)

// 69c90cbe9897f5e890414725
module.exports = router;