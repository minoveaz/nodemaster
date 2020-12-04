const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
    res.send('Get Usuario')
})

app.post('/user', (req, res) => {
    res.send('Post Usuario')
})

app.put('/user', (req, res) => {
    res.send('Put Usuario')
})

app.delete('/user', (req, res) => {
    res.send('Delete Usuario')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})