const express = require('express');
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt')
const userRoutes = require('./routes/user.routes') 


app.use('/',userRoutes)

// app.get('/', async (req, res) => {
//     // Model.findAll()
//     const getAllUser = await Users.findAll()
//     console.log(getAllUser)
// })
// app.get('/email', async (req, res) => {
//     // Model.findAll()
//     const getAllUser = await Users.findAll({ attributes: ['email'] })
//     console.log(getAllUser[0])
// })

// app.get('/users', async (req, res) => {
//     // Model.findAll()
//     const getAllUser = await Users.findAll()
//     console.log(getAllUser)
// })

// app.post('/signup', async (req, res) => {
//     console.log(`We are in sigun up function`)
//     const name = req.body.name
//     const email = req.body.email
//     const password = req.body.password
//     const cpassword = req.body.cpassword
//     const addUser = await Users.create({ name, email, password, cpassword })
//     console.log(addUser)
//     console.log(name)
//     console.log(email)
//     console.log(password)
// })

app.use('/',userRoutes)


app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)