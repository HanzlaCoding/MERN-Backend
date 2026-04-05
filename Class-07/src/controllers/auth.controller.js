const userModel = require("../model/auth.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _config = require("../../config/config");

const register = async (req, res) => {
    const { username, email, password, role } = req.body;

    if (!username && !email && !password && !role) {
        return console.log(`Please fill all the fields!`);
    }

    const userAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (userAlreadyExist) {
        return res.status(400).json(
            {message:`User already exist!`});
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await userModel.create({
        username,
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

module.exports = {
    register
}

//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDI0OTU4ZGZkZmUyZjU4ZjkzNjIwYiIsImVtYWlsIjoiaGVsbG9AZW1pYWwuY29tIiwiaWF0IjoxNzc1Mzg5MDE2LCJleHAiOjE3NzUzOTI2MTZ9.vSSfS4bRzNWIdtfOMlMwZfmOlferlKFl70QRkMMV2aY"