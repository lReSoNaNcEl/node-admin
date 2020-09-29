const {Sequelize} = require('sequelize')
const colors = require('colors/safe')

const sequelize = new Sequelize(process.env.DATABASE_URL)

new Promise(async resolve => await sequelize.authenticate())
    .then(() => console.log(colors.red('Successfully connection to database')))
    .catch(e => console.log(colors.red(e)))

module.exports = sequelize