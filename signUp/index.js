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

async function connected() {
    try{
        await sequelize.authenticate();
        console.log("Connected")
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}