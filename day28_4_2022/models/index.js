const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
});
const db = {}
db.Users = require('./user.model')(sequelize, DataTypes)
db.sequelize = sequelize
db.Sequelize = Sequelize 
module.exports = db