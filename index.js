const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;

app.get('/', (req, res) => {
    res.send('Look mama again i am using node mon in server !!')
});

app.get('/phones', (req, res) => {
    res.send(phones)
});

app.get('/phones/:id', (req, res) => {

    const phone = phones.find(ph => ph.id === id || {});
    res.send(phone)
})

app.listen(port, () => {
    console.log(`Opening my first server ${port}`)
})