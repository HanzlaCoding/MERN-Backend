const { default: mongoose } = require("mongoose");
const _config = require("../../config/config");


const connectDB = async () => {
    try {
        await mongoose.connect(_config.MONGO_URI,{
            dbName:"Mern-Auth"
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;