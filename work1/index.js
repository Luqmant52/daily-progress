const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const { log } = require('console')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node',
})

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connected");
    }
})

app.post('/user',async (req, res) => {
    console.log('this is Post Method')
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    db.query(`INSERT INTO users (name, email, password, cpassword) VALUES ('${name}','${email}','${password}','${cpassword}' )`,
        (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(cpassword);
    res.json({
        name,
        email,
        password,
        cpassword,
    })
})
app.listen(3000, console.log('3000'))

