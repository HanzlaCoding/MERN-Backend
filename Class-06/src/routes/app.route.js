const express = require('express');
const { get, create } = require('../controllers/app.controller');
const { reqMiddleware } = require('../middlewares/req.middleware');


const router = express.Router();


router.get('/get', reqMiddleware, get)
router.get('/create', create)


module.exports = router;