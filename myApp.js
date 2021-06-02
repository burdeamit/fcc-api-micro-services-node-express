var express = require('express');
var app = express();
require('dotenv').config()


console.log("Hello World");

// Logger
app.use((req, res, next) => {
    let loggerString = req.method + " " + req.path + " - " + req.ip;
    console.log('Time:', Date.now())
    console.log(loggerString);
  next()
})



app.use("/public", express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// JSON API
app.get('/json', (req, res) => {
    let messageObj = { message : "Hello json" }
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        messageObj.message = messageObj.message.toUpperCase();
    } 
    res.json(messageObj);
       
})




























 module.exports = app;
