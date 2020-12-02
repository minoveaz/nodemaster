const express = require('express')
const app = express()
const port = 3000

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    /* res.send('Hello World!') */

    res.render('home', {
        year: new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});