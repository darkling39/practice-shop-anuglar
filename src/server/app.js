const express = require('express');
const app = express()
const productRoute = require('./api/routes/products');
const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', '*')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

app.use('/products', productRoute)

module.exports = app