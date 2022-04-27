const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const { log } = require('console');

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});
db.connect((error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Db is Connected");
    }
})

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
    const cpassword = req.body.cpassword
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(cpassword);
    db.query(`INSERT INTO users (name, email, password,cpassword) VALUES ('${name}','${email}','${password}','${cpassword}')`,
        (error, result, fields) => {
            console.log('The user is ', result)
        })
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