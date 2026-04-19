const express = require("express");
const authController = require("../controllers/auth.controller");
const { protect } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/login", (req, res) => res.render("login"));

router.post("/login", authController.login);

router.get("/register", (req, res) => res.render("register"));

router.post("/register", authController.register);

router.get("/logout", authController.logout);

router.get("/profile", protect, (req, res) => res.render("profile", { user: req.user }));

module.exports = router;