const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

db.connect((err)=>{
    if (err){
        console.error('Error Conneting '+ err.stack);
        return
    }
    console.log('connected as id '+ db.threadId)
});

app.get('/', (req, res) => {
    console.log("Hello Db")
})


app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)