const express = require('express');
const { register, login, getMe } = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe)

module.exports = router;