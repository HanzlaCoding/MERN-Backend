const express = require('express');
const { register } = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', authMiddleware, register)

module.exports = router;