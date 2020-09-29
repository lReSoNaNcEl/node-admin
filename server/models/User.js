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
        validate: {
            isEmail: {msg: 'Invalid Email'}
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {msg: 'Invalid Age'},
            len: [1, 2]
        }
    },
    phone: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true
    }
})

module.exports = User