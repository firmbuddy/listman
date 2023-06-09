const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const sequelize = require('./util/database');
const product = require('./model/product');
// product.sync();

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

sequelize
    .sync()
    .then(result => {
        // console.log(result)
        app.listen(process.env.PORT || 8080);
    })
    .catch(err => {
        console.log(err)
    });

// app.listen(process.env.PORT || 8080);