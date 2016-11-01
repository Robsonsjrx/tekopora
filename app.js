// server.js
// load the things we need
var express = require('express');
var app = express();
var http = require('http')

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
// use res.render to load up an ejs view file

// index page
app.get('/health', function(req, res) {
    res.sendStatus(200)
});

app.get('/', function(req, res) {
    res.render('pages/index');
});

function startServer () {
    var serverPort = 3000
    http.createServer(app).listen(serverPort, null, null, function(){
        console.log("Listening to http port " + serverPort)
    })
}

startServer()