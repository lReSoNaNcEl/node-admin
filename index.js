require('module-alias/register')

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')('dev')
const config = require('dotenv').config().parsed
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 8081

const Router = require('@services/Router')
const routes = require('@routes/index')

new Router(app).load(routes)

require('@sequelize').sync()

app.use(morgan)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, 'server', 'public')))

app.listen(port, (req, res) => {console.log(`Server was started on port ${port}`)})