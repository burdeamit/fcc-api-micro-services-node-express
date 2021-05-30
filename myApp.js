var express = require('express');
var app = express();

console.log("Hello World");

app.get('/', (req, res) => {
    res.send('You used the get method');
})


































 module.exports = app;
