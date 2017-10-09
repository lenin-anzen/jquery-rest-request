const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log('Server started');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);