const express = require('express');
const morgan = require('morgan');
const app = express();
const authRoutes = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use('/api/auth', authRoutes)


module.exports = app;