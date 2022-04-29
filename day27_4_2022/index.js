const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// const saltRounds = 10;

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

app.get('/getuser', (req, res) => {
    const id = req.params.id
    db.query(`SELECT * FROM users`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result)
        }
    })
})

app.post('/signup', async (req, res) => {
    console.log(`We are in sigun up function`)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    const encPass = await bcrypt.hash(password, 13);
    const cEncPass = await bcrypt.hash(password, 13);
    console.log(encPass)
    console.log(cEncPass)
    db.query(`INSERT INTO users (name, email, password,cpassword) VALUES ('${name}','${email}','${password}','${cpassword}')`,
        (error, result) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log('The user is ', result)
            }
        })
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(cpassword)
    res.status(200).json({
        name,
        email,
        password,
        cpassword,
    })
})

app.post('/signin', async (req, res) => {
    console.log(`We are in signin function`)
    const email = req.body.email
    const password = req.body.password
    const dbdata =  db.query(`SELECT * from  users WHERE email = ${email}`)
    const bcom = await bcrypt.compare(password,dbdata.encPass)
    console.log(bcom)
    res.status(200).json({
        email,
        password,
    })
})

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)