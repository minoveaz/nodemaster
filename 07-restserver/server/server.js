require('./config/config')

const express = require('express');
const mongoose = require('mongoose');

const colors = require('colors');
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/user'));

mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;
    console.log('=========Server============'.green);
    console.log('Base de datos Online');
    console.log('=========Server============'.green);

});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`.yellow)
})