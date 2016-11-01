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
app.get('/', function(req, res) {
    res.render('pages/index');
});

function startServer () {
    var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080
    http.createServer(app).listen(serverPort, null, null, function(){
        console.log("Listening to http port " + serverPort)
    })
}

startServer()