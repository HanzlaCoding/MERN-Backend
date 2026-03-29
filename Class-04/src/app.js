const express = require('express');
const studentRoutes = require('./routes/student.route.js')

const app = express();

// Middleware
app.use(express.json())
app.use('/api/student', studentRoutes)

module.exports = app;