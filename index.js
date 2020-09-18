require('module-alias/register')

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')('dev')
const config = require('dotenv').config().parsed
const cors = require('cors')
const path = require('path')
const app = express()

require('@sequelize').sync()

app.use(morgan)
app.use('/admin', require('@admin/index'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 5000, (req, res) => {
    app.get('*', (req, res) => {
        res.status(200).json({
            status: 'Success',
            req: req.body,
            mode: process.env.NODE_ENV,
            config
        })
    })
})