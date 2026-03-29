const { default: mongoose, connect } = require("mongoose");
const { MONGO_URI } = require("./config");

const connectDb = () => {
    mongoose.connect(MONGO_URI, {
        dbName: 'Students'
    })
        .then(() => {
            console.log(`Connected to db successfully...`);
        })
        .catch((err) => {
            console.log(`Some error occur ${err.message}`);
        })
}

module.exports = connectDb;