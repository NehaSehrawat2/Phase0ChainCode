var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
   // res.sendFile('../../index.html');
	
	res.sendFile(path.join(__dirname + '/public/proposal_form.html'));
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
  