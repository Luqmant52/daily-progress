const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log(req.query.page)
})
app.post('/',(req,res)=>{
    res.send("helo Post")
})

app.get('/product/:id',(req,res)=>{
    console.log(req.params.id)
})

app.get('/product/:id',(req,res)=>{
    console.log(req.query)
})

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)