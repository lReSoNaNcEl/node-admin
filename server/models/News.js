const {DataTypes} = require('sequelize')
const sequelize = require('@sequelize')

const News = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.TEXT,
    },
    preview: {
        type: DataTypes.TEXT
    },
    imgUrl: {
        type: DataTypes.TEXT
    },
})

module.exports = News