const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json())
// Api
// create, read, update, delete
// CRUD Operations / REST API
// POST | GET | PUT/PATCH | DELETE

// app.mathodName("route /home /about", (req,res)=>{})

app.get("/:name/:age/:user", (req, res) => {
    // body | Params, Query
    const { name, age, user } = req.params;
    const q = req.query;



    res.send(`I am ${name} and my age is ${age} and ${user}, this is from query ${q.q}`)
})

app.post('/create', (req, res) => {
    const {name, course, gender, email} = req.body;

    res.send({name, email, course, 
        gender})
    
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})