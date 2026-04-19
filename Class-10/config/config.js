const { config } = require("dotenv");

config()

if (!process.env.PORT) {
    throw new Error("Port is not defined");
}

const _config = {
    port: process.env.PORT || 8000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
}

module.exports = _config;