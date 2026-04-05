const app = require("./src/app");
const _config = require('./config/config')


app.listen(_config.PORT, () => {
    console.log(`Server is running on port ${_config.PORT}`);
})