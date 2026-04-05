const express = require('express');
const routes = require('./routes/app.route');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json()) // req.body ka data read krsko.
app.use(morgan('dev'));
app.use('/api/test', routes) // routes define krny keliay


module.exports = app;