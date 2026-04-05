const { config } = require("dotenv");
config();


if (!process.env.PORT) {
    return console.log(`Please provide PORT.`);
}

if (!process.env.MONGO_URI) {
    return console.log(`Please provide MONGO_URI.`);
}

if(!process.env.JWT_SECRET){
    return console.log(`Please provide JWT_SECRET.`);
}

const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = _config;