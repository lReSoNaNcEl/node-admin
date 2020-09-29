const {DataTypes} = require('sequelize')
const sequelize = require('@sequelize')

const Session = sequelize.define('Session', {
    userId: {
        type: DataTypes.INTEGER
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING
    },
})