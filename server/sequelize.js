const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_NAME || 'postgres',
    port: process.env.DB_PORT || '5432'
})

new Promise(async resolve => await sequelize.authenticate())
    .then(() => console.log('Successfully connection to database'))
    .catch(e => console.log(e))

module.exports = sequelize