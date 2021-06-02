var express = require('express');
var app = express();
require('dotenv').config()


// Logger
app.use((req, res, next) => {
    let loggerString = req.method + " " + req.path + " - " + req.ip;
    console.log('Time:', Date.now())
    console.log(loggerString);
  next()
})


// chained middlewares 
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    console.log(req.time);

    next();
}, (req, res) => {
    res.json({
      time : req.time,
  });
});

// echo word Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res, next) => {
    let word = req.params.word;
    res.json({
        echo : word,
    })
})

// name API Get Query Parameter Input from the Client

app.get('/name', (req, res, next) => {
    let { first: firstname, last: lastname } = req.query;

    res.json({
        name : `${firstname} ${lastname}`,
    })
})




// Hello node console 
console.log("Hello World");



// Middleware to server static files from public folder
app.use("/public", express.static(__dirname + '/public'));


// Sending Response to Get Method
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })


// index route response using a static file
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
