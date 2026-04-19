const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, { expiresIn: "30d" });
};

const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        
        // Multiple accounts !!!!
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.render("register", { error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        if (user) {
            const token = generateToken(user._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            });
            // Redirect to home after successful registration
            return res.redirect("/api/auth/profile");
        } else {
            return res.render("register", { error: "Invalid user data" });
        }
    } catch (error) {
        console.error(error);
        return res.render("register", { error: error.message || "Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;        

        const user = await User.findOne({ email });

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (user && matchedPassword) {
            const token = generateToken(user._id);
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            });
            // Redirect to home after successful login
            return res.redirect("/api/auth/profile");
        } else {
            return res.render("login", { error: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.render("login", { error: "Server Error" });
    }
};

const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/api/auth/login");
};

module.exports = {
    register,
    login,
    logout
};