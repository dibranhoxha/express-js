var express = require('express');
var app = express();
const port = 3002;

app.get('/', function (req, res) {
    res.send('Hello world');
})

