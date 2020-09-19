const {DataTypes} = require('sequelize')
const sequelize = require('@sequelize')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        isEmail: {
            msg: 'Email error'
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = User