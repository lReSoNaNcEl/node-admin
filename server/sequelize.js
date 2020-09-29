const {Sequelize} = require('sequelize')
const colors = require('colors')

const sequelize = new Sequelize(process.env.DATABASE_URL)

new Promise(async resolve => await sequelize.authenticate())
    .then(() => console.log('Successfully connection to database'))
    .catch(e => console.log(e))

module.exports = sequelize