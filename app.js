const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World from express!');    // open http://localhost:3000/ in browser
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})