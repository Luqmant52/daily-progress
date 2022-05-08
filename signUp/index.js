const express = require('express')
const app = express()
const cors = require('cors')

const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

app.use(cors())
app.use(express.json())

async function connected() {
    try {
        await sequelize.authenticate();
        console.log("Connected")
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connected();

const addUsers = sequelize.define('signup', {
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    cpassword: { type: DataTypes.STRING },
})

app.get('/', (req, res) => {
    console.log("App Started successfully")
})
app.post('/signup', async (req, res) => {
    console.log("Add user method")
    const {username,email,password} = req.body
    const addUser = await addUsers.create({ username, email, password },(err)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(Added);
        }
    })
    console.log(addUser);
    console.log("Add user Succesfuly")
})



app.listen(3000, () => {
    console.log("App is listen on http://localhost:3000")
})