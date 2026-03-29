const app = require("./src/app");
const dotenv = require('dotenv');
const connectDb = require("./src/config/db");
dotenv.config();

connectDb();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);  
})


// http://localhost:3000/api/student/