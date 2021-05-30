var express = require('express');
var app = express();
require('dotenv').config()



console.log("Hello World");

app.use("/public", express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


app.get('/json', (req, res) => {
    let messageObj = { message : "Hello json" }
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        messageObj.message = messageObj.message.toUpperCase();
    } 
    res.json(messageObj);
       
})

app.use('/', (req, res, next) => {
    console.log(`${req.method} - ${req.path} - ${req.ip} `);
})



























 module.exports = app;
