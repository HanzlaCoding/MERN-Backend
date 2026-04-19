const express = require('express');
const multer = require('multer');
const { registerSchema, loginSchema } = require('./joi.middleware');
const app = express()

app.use(express.json());

// File Handeling (BASE64)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage: storage });

// Route Usage
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);    
    res.send("File Uploaded! Check uploads folder.");
});


app.post('/register', (req, res) => {
    console.log(req.body);

    const { error, value } = registerSchema.validate(req.body);
    console.log('Validation', value);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    res.send('User registered successfully');
})

app.post('/login', (req, res) => {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    res.send('User logged in successfully');
})


// Central Error Middleware (Must be at the end of server.js)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


// Install multer
// npm i multer
// setup multer storage
// use multer in route
// 