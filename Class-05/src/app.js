const express = require('express');
const studentRouter = require('./routes/student.route')
const app = express();

app.use(express.json()); // Body se data read krny keliay
app.use('/api/student', studentRouter)


module.exports = app;