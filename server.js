const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const testData = require('./testData.js');
const LEPORT = 5000;

const app = express();

//bodyparser json, urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//static server
app.use(express.static(path.join(__dirname, 'client/src/images/')));

// api/list endpoint
app.get('/api/list', (req,res) => {
    var list = ["item1", "item2", "item3"]; //test working
    res.send(testData);
});

// Handles any other requests
app.get('*', (req,res) =>{
    res.json(path.join(__dirname+'client/build/index.html'));
});

const port = process.env.PORT || LEPORT;
app.listen(port);

console.log('App is listening on port ' + port);
