const express = require('express');
const { welcome } = require('../controllers/student.controller');


const router  = express.Router();

router.get('/', welcome)



module.exports = router;