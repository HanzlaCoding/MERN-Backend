const { config } = require("dotenv");

config();

if (!process.env.PORT) {
    throw new Error("PORT is not defined in the environment variables");
}
if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
}