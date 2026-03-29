const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.end("Helo World!")
})

// Api (Application Programming Interface)
app.get("/login", (req, res) => {
    res.end("Welcome to Login Page!")
})

app.listen(3000, () => { console.log("Server is running on port 3000 http://localhost:3000") })