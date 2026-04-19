const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const config = require("../../config/config");

const protect = async (req, res, next) => {
    let token;

    if (req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.redirect("/api/auth/login");
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.redirect("/api/auth/login");
        }
        
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.clearCookie("token");
        return res.redirect("/api/auth/login");
    }
};

module.exports = { protect };
