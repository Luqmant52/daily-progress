const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    console.log("I am route")
})
app.post('/user',(req,res)=>{
    console.log(req.body)
    console.log(req.body.user)
})


function foo() {
    console.log("I am Function")
}

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)