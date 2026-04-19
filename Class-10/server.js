const app = require("./src/app");
const _config = require("./config/config");
const connectDB = require("./src/db/db");

connectDB();

app.listen(_config.port, () => {
    console.log(`Server is running on port ${_config.port}`);
});
