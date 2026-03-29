const express = require('express');
const studentRoutes = require('../src/routes/student.routes.js')

const app = express();

app.use(express.json())
app.use("/api/student", studentRoutes)

module.exports = app;