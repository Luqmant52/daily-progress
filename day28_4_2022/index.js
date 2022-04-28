const express = require('express');
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false

    }
});

async function connected() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connected();

const Users = sequelize.define('users', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    cpassword: { type: DataTypes.STRING },
})

app.get('/', async (req, res) => {
    // Model.findAll()
    const getAllUser = await Users.findAll()
    console.log(getAllUser)
})
app.get('/email', async (req, res) => {
    // Model.findAll()
    const getAllUser = await Users.findAll({ attributes: ['email'] })
    console.log(getAllUser[0])
})

app.post('/signup', async (req, res) => {
    console.log(`We are in sigun up function`)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    const addUser = await Users.create({ name, email, password, cpassword })
    console.log(addUser)
    console.log(name)
    console.log(email)
    console.log(password)
})


app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)