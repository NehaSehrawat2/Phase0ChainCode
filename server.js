var express = require('express');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var variables = require('./variables.js');
var chainCodeURL = 'http://' + variables.chainCodeIPAddress + ':' + variables.chainCodePort + '/chaincode'
console.log(chainCodeURL)
var request = require('request');

	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());



app.get('/', function(req, res,next){
	res.sendFile(path.join(__dirname + '/public/proposal_form.html'));
  
});


app.post('/proposal_form', multipartMiddleware, function(req, res, next){
	var proposal_id = req.body.proposal_id;
  	console.log("proposal_id******"+proposal_id);
	
	var region = req.body.region;
	console.log("region*******"+region);
	
	var country = req.body.country;
	console.log("country*********"+country);
	
	var proposal_type = req.body.proposal_type;
	console.log("proposal_type*********"+proposal_type);
	
	var proposal_date = req.body.proposal_date;
	console.log("proposal_date*********"+proposal_date);
	
	var approval_date = req.body.approval_date;
	console.log("approval_date*********"+approval_date);
	
	var shared_with_procurement_team_on = req.body.shared_with_procurement_team_on;
	console.log("shared_with_procurement_team_on*********"+shared_with_procurement_team_on);
	
	var approver = req.body.approver;
	console.log("approver*********"+approver);
	
	var number_of_tasks_covered = req.body.number_of_tasks_covered;
	console.log("number_of_tasks_covered*********"+number_of_tasks_covered);
		
	var device_qty = req.body.device_qty;
	console.log("device_qty*********"+device_qty);
	
	var accessary_periperal_qty = req.body.accessary_periperal_qty;
	console.log("accessary_periperal_qty*********"+accessary_periperal_qty);
	
	var total_qty = req.body.total_qty;
	console.log("total_qty*********"+total_qty);
	
	var status = req.body.status;
	console.log("status*********"+status);
	
	console.log('request received:');
   
	 res.json({});
  
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
  