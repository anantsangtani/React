var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var data = [];
var userData=[];
var adminData=[];
var userDetails={};
var userPage={page:1};
var flag=false;
var pageNumber=1;

var user = { userName: "user", password: "user" };
var admin = { userName: "admin", password: "admin" };


app.use(cors());
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get('/user', function (req, res) {
  res.send(data);
});
app.post('/user', function (req, res) {
  var login=req.body;
  if ((login.form.userName == user.userName && login.form.password == user.password) ||
    (login.form.userName == admin.userName && login.form.password == admin.password)) {
    data.push(req.body);
     res.send(true);
  }
  else {
    res.send(false);
  }
});

app.post('/userdetails', function (req, res) {
  if(userPage.page==1){
    userDetails.page1=req.body; 
  }
  else{
    userDetails.page2=req.body;
  }
  
  res.send(true);
 });

 app.get('/userdetails', function (req, res) {
   if(flag){
 res.send(userDetails);
   }
 else{
    res.send(null);
 }
 });

 app.post('/sharedetails', function (req, res) {
  flag = req.body;
  res.send(flag);
 });

app.get('/page', function (req, res) {
  res.send(userPage);
 });
 app.post('/page', function (req, res) {
   pageNumber=pageNumber+req.body.page;
userPage={page:pageNumber};
   console.log(userPage);
  // pageNumber=pageNumber=req.body
  res.send(userPage);
 });

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});