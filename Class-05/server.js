const app = require("./src/app");
const connectDb = require("./src/config/db");
const { PORT } = require("./src/config/config")

connectDb();


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})