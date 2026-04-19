const Joi = require('joi');

// 1. Define the Schema
const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    birth_year: Joi.number().integer().min(1940).max(2023),
    password: Joi.string().required().min(8).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
});

module.exports = { registerSchema, loginSchema };


// express-validator