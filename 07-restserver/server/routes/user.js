const express = require('express');
const bcrypt = require('bcrypt')
const app = express()
const User = require('../models/user')


app.get('/user', (req, res) => {
    res.send('Get Usuario')
})

app.post('/user', (req, res) => {
    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        })
    });
})

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });

    })

})

app.delete('/user', (req, res) => {
    res.send('Delete Usuario')
})

module.exports = app;