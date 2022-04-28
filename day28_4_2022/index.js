const express = require('express');
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}, {
    freezeTableName: true,
    timestamps: false

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

app.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)