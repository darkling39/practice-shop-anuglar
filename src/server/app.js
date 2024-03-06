const express = require('express');
const app = express()
const productRoute = require('./api/routes/products');
const morgan = require('morgan');

app.use(morgan('dev'))

app.use('/products', productRoute)

module.exports = app