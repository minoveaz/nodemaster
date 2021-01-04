require('./config/config')

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user', (req, res) => {
    res.send('Get Usuario')
})

app.post('/user', (req, res) => {
    let body = req.body;
    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'name is required',
        })
    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/user', (req, res) => {
    res.send('Delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})