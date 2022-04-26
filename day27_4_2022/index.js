const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

app.post('/signin', (req, res) => {
    console.log(`We are in signin function`)
    const email = req.body.email
    const password = req.body.password
    res.status(200).json({
        email,
        password,
    })
})
app.post('/signup', (req, res) => {
    console.log(`We are in sigun up function`)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.password
    res.status(200).json({
        name,
        email,
        password,
        cpassword,
    })
})

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)