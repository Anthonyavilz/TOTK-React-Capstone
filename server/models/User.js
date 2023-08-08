const { DataTypes } = require('sequelize')
const sequelize = require('../util/db')

module.exports = {
    User: sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING
    })
}