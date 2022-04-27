const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const brypt = require('bcrypt')

const saltRounds = 10;

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
    const encPass = await brypt.hash(password, 13);
    const cEncPass = await brypt.hash(password, 13);
    console.log(encPass)
    console.log(cEncPass)
    db.query(`INSERT INTO users (name, email, password,cpassword) VALUES ('${name}','${email}','${encPass}','${cEncPass}')`,
        (error, result) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log('The user is ', result)
            }
        })
    res.status(200).json({
        name,
        email,
        password,
        cpassword,
    })
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

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)