const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST || 'localhost',
    dialect: process.env.DB_TYPE || 'postgres'
})

try {
    setTimeout(async () => {
        await sequelize.authenticate()
        console.log('Successfuly connection to database')
    },  1000)
}
catch (e) {
    console.log('Connection error')
}

module.exports = sequelize