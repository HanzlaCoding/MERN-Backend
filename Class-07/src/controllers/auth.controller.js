const userModel = require("../model/auth.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _config = require("../../config/config");

const register = async (req, res) => {
    const { email, password, role } = req.body;

    if (!email && !password && !role) {
        return console.log(`Please fill all the fields!`);
    }

    const userAlreadyExist = await userModel.findOne({ email })

    if (userAlreadyExist) {
        return res.status(400).json(
            { message: `User already exist!` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await userModel.create({
        email,
        password: hashedPassword,
        role
    })

    const token = jwt.sign(
        {
            id: newUser._id,
            email: newUser.email,
            role: newUser.role
        },
        _config.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000 // 1 hour
    })

    res.status(201).json({
        message: "User registered successfully!",
        user: newUser,
        token
    })

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        return console.log(`Please fill all the fields!`);
    }

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: `Invalid credentials!` });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: `Invalid credentials!` });
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        _config.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000 // 1 hour
    })

    res.status(200).json({
        message: "User logged in successfully!",
        user,
        token
    })
}

const getMe = async (req, res) => {
    const user = req.user;

    const foundUser = await userModel.findById(user.id);


    res.status(200).json({
        message: "User fetched successfully!",
        foundUser
    })
}

module.exports = {
    register,
    login,
    getMe
}