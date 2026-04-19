const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/auth.routes");

// Set ejs as view engine
app.set('view engine', 'ejs');

app.use(express.json());
// Ye middleware apki ejs/html (forms) files ye unky data ko parse (json) krega
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/api/auth", authRoutes);

module.exports = app;