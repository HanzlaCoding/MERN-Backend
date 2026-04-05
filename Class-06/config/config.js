const { config } = require("dotenv");
config();

if(!process.env.PORT){
    return console.log(`Please provide PORT.`)
}

const _config = {
    PORT: process.env.PORT
}


module.exports = _config;