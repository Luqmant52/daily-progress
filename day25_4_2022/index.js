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

db.connect((err) => {
    if (err) {
        console.error('Error Conneting ' + err.stack);
        return
    }
    console.log('connected as id ' + db.threadId)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    db.query(`SELECT * FROM users WHERE ID = ${id}`, (error, result, fields) => {
        console.log('The user is ', result[0])
    })
})

app.post('/signup', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const pass = req.body.password

    db.query(`INSERT INTO users (name, email, password) VALUES ('${name}','${email}','${pass}')`,
        (error, result, fields) => {
            console.log('The user is ', result)
        })
    res.send('Ok')
})


app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)