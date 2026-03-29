const mongoose = require("mongoose")

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN-Backend"
    })
        .then(() => {
            console.log(`Connected to MongoDb successfully...`);
        })
        .catch((err) => {
            console.log(`Error occured ${err.message}`);
        })
}

module.exports = connectDb;